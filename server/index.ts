import sslRedirect from 'heroku-ssl-redirect';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3001;

app.disable('x-powered-by')
app.use(sslRedirect())

// Apollo code
// The GraphQL schema
async function startApolloServer(): Promise<void>{    
    // A map of functions which return data for the schema.    
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: {
          prisma
        }
    })

    await apolloServer.start()
    apolloServer.applyMiddleware({ app, path: '/api' })
}
startApolloServer();

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like main.js/css file
    const path = require('path');
    app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

    // Express will serve up index.html if it doesn't recognize route (e.g when it's not a defined API request)
    app.get('*', (req, res) => {
        const servePath = path.resolve(__dirname, '..', '..', 'client', 'build', 'index.html')
        res.sendFile(servePath);
    })
}

app.listen(PORT, () => {
    console.log(`Listening REALLY CLOSELY on port ${PORT}`);
})