const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const { MONGODB } = require('./config');

const typeDefs = gql`
    type Query{
        sayHi: String!
    }
`

const resolvers = {
    Query: {
        sayHi: () => 'Hello test text'
        }
}

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