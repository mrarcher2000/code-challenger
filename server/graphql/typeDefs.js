const { gql } = require('apollo-server');

module.exports = gql`
    type Post {
        id: ID!
        body: String!
        createdAt: String!
        username: String!
        comment: [Comment]!
        likes: [Like]!
    }
    type Comment{
        body: String!
        createdAt: String!
        id: ID!
        username: String!


    }

    type Like{
       id: ID!
       createdAt: String!
       username: String!

    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!


    }
    input RegisterInput{
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
    }
    type Query {
        getPosts: [Post]
        getPost(postId: ID!): Post

    }


    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPost(body: String!): Post!
        deletePost(postId: ID!): String!
        createComm(postId: String!, body: String!): Post!
        deleteComm(postId: ID!, commentId: ID!): Post!
        likePost(postId: ID!): Post!
    }

    `;