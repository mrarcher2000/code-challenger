const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config');


const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('ArchDev Pants MongoDB connected');
        return server.listen({ port: 5000 })
    })
    .then(res => {
        console.log(`ArchDev Pants your server running at ${res.url}`)
    });