
const postsResolvers = require('./posts');
const userResolvers = require('./users');
const postcommentsResolvers = require('./postcomments');

const highScoreResolvers = require('./highscores');


module.exports = {
    Query: {
        ...postsResolvers.Query,
        ...highScoreResolvers.Query
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...postcommentsResolvers.Mutation,
        ...highScoreResolvers.Mutation
    }
};