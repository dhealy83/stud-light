const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    collections: [Collection]
  }

  type Collection {
    _id: ID
    title: String
    cards: [Card]
  }

  type Card {
    _id: ID
    question: String
    answer: String
    notes: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    collections: [Collection]
    collection(collectionId: ID!): Collection
    me(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    updateUser(
      userId: ID!
      username: String
      email: String
      password: String
    ): User

    deleteUser(userId: ID!): User

    login(email: String!, password: String!): Auth

    addCollection(userId: ID!, title: String!): Collection

    updateCollection(collectionId: ID!, title: String!): Collection

    deleteCollection(userId: ID!, collectionId: ID!): Collection

    addCard(
      collectionId: ID!
      question: String!
      answer: String!
      notes: String
    ): Card

    updateCard(
      cardId: ID!
      question: String!
      answer: String!
      notes: String
    ): Card

    deleteCard(collectionId: ID!, cardId: ID!): Card
  }
`;

module.exports = typeDefs;
