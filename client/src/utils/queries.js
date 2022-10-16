import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      collections {
        _id
        title
        cards {
          question
          answer
        }
      }
    }
  }
`;

export const QUERY_USER_COLLECTION = gql`
  query User($userId: ID!) {
    user(userId: $userId) {
      _id
      collections {
        title
        _id
      }
    }
  }
`;

export const QUERY_SINGLE_COLLECTION = gql`
  query singleCollection($collectionId: ID!) {
    collection(collectionId: $collectionId) {
      title
      cards {
        _id
        question
        answer
        notes
      }
    }
  }
`
