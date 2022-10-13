const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    collections: [Collection]
  }

  type Card {
    question: String
    answer: String
  }

  type Collection {
    _id: ID
    title: String
    cards: [Card]
  }

  type Auth {
    token: ID!
    user: User
  }

  input collectionInput {
    title: String!
    card: cardInput
  }

  input cardInput {
    question: String
    answer: String
  }

  type Query {
    users: [User]
    user(userId: ID!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addCollection(userId: ID, title: String!): Collection

    addCard(collectionId: ID, question: String!, answer: String!): Collection
    deleteCard(collectionId: ID!, cardId: ID!): Collection

    removeUser: User
  }
`;

module.exports = typeDefs;
