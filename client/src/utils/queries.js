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
  query Query {
    me {
      username
      collections {
        title
      }
    }
  }
`;
