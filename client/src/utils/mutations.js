import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(userId: $userId) {
      _id
    }
  }
`;

export const ADD_COLLECTION = gql`
  mutation addCollection($userId: ID!, $title: String!) {
    addCollection(userId: $userId, title: $title) {
      _id
      title
    }
  }
`;

export const ADD_CARD = gql`
  mutation addCard(
    $collectionId: ID!
    $question: String!
    $answer: String!
    $notes: String
  ) {
    addCard(
      collectionId: $collectionId
      question: $question
      answer: $answer
      notes: $notes
    ) {
      _id
      question
      answer
      notes
    }
  }
`;
