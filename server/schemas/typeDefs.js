const { gql } = require('apollo-server-express');

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
        title: String
        cards: [Card]
    }

    type Query {
        users: [User]
        user(userId:ID!): User
    }
`;

module.exports = typeDefs;