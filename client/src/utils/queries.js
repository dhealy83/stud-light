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

export const QUERY_ME = gql`
  query me {
    me {
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
