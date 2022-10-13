const { AuthenticationError } = require("apollo-server-express");
const { User, Collection, Card } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({}).populate("collections");
    },
    user: async (parent, args) => {
      return await User.findOne({ _id: args.userId }).populate("collections");
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

    addCard: async (parent, { collectionId, question, answer }) => {
      const findCollection = await Collection.findByIdAndUpdate(
        { _id: collectionId },
        { $addToSet: { cards: { question, answer } } },
        { new: true }
      );

      return findCollection;
    },
    deleteCard: async (parent, { collectionId, cardId }) => {
      await Collection.findByIdAndUpdate(
        { _id: collectionId },
        { $pull: { cards: { _id: cardId } } }
        // { new: true }
      );
    },
  },
};

module.exports = resolvers;
