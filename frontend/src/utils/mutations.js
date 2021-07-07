import gql from 'graphql-tag';

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

export const ADD_POST = gql`
  mutation addPost($postText: String!) {
    addPost(postText: $postText) {
      _id
      postText
      createdAt
      username
      codeText
    }
  }
`;


export const POST_SCORES = gql`
  mutation postScores($username: String!, $challengesCompleted: Int, $totalScore: Int) {
    postScores(username: $username, challengesCompleted: $challengesCompleted, totalScore: $totalScore) {
      user
      challengesCompleted
      totalScore
    }
  }
`;