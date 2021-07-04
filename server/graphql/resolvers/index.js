
const postsResolvers = require('./posts');
const userResolvers = require('./users');
const postcommentsResolvers = require('./postcomments');


module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...postcommentsResolvers.Mutation
    }
};