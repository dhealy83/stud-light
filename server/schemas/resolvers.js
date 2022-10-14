const { AuthenticationError } = require("apollo-server-express");
const { User, Collection, Card } = require("../models");
const { findOne } = require("../models/User");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("collections");
    },
    collections: async () => {
      return await Collection.find({}).populate("cards");
    },
    user: async (parent, args) => {
      return await User.findOne({ _id: args.userId }).populate("collections");
    },

    collections: async () => {
      return await Collection.find({}).populate("cards");
    },

    collection: async (parent, { collectionId }) => {
      return await Collection.findOne({ _id: collectionId }).populate("cards");
    },

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, { userId, username, email, password }) => {
      await User.findOneAndUpdate(
        { _id: userId },
        { username: username, email: email, password: password },
        { new: true }
      );
    },
    deleteUser: async (parent, { userId }) => {
      await User.findOneAndDelete({ _id: userId });
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    // Leaving out context for now until we get authorization
    addCollection: async (parent, { userId, title }) => {
      // if (context.user){}

      console.log(title);
      const createCollection = await Collection.create({
        title: title,
      });
      const collection = createCollection;
      console.log(collection._id.valueOf());

      const collectionToUser = await User.findByIdAndUpdate(
        { _id: userId },
        { $addToSet: { collections: collection._id.valueOf() } },
        { new: true }
      );

      return createCollection, collectionToUser;
    },

    updateCollection: async (parent, { collectionId, title }) => {
      await Collection.findOneAndUpdate(
        { _id: collectionId },
        { title: title },
        { new: true }
      );
    },

    deleteCollection: async (parent, { userId, collectionId }) => {
      await User.findByIdAndUpdate(
        { _id: userId },
        { $pull: { collections: collectionId } }
      );
      await Collection.findOneAndDelete({ _id: collectionId });
    },

    addCard: async (parent, { collectionId, question, answer, notes }) => {
      const createCard = await Card.create({
        question: question,
        answer: answer,
        notes: notes,
      });
      const card = createCard;
      console.log(card._id.valueOf(), "line 100");

      const cardToCollection = await Collection.findByIdAndUpdate(
        { _id: collectionId },
        { $addToSet: { cards: card._id.valueOf() } },
        { new: true }
      ).populate("cards");

      return createCard, cardToCollection;
    },

    updateCard: async (parent, { cardId, question, answer, notes }) => {
      await Card.findOneAndUpdate(
        { _id: cardId },
        { question: question, answer: answer, notes: notes },
        { new: true }
      );
    },

    deleteCard: async (parent, { collectionId, cardId }) => {
      await Collection.findByIdAndUpdate(
        { _id: collectionId },
        { $pull: { cards: cardId } }
      );
      await Card.findOneAndDelete({ _id: cardId });
    },
  },
};

module.exports = resolvers;
