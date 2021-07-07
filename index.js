const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const mongoose = require('mongoose');

const typeDefs = require('./server/graphql/typeDefs');
const resolvers = require('./server/graphql/resolvers');
const { MONGODB } = require('./server/config');


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }
mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('ArchDev Pants MongoDB connected');
        return server.listen({ port: 5000 })
    })
    .then(res => {
        console.log(`ArchDev Pants your server running at ${res.url}`)
    })

    .catch(err =>{
        console.error(err)
    })