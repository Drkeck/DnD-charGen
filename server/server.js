const express = require('express');
const db = require('./config/connection');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { authMiddleware } = require('./utils/Auth');
const { typeDefs, resolvers } = require('./schemas');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'))
});

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on ${PORT}`);
        console.log(`use GraphQL at http://localhost:${server.graphqlPath}`)
    });
});