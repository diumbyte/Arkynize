import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { PrismaClient } from '@prisma/client';

import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const prisma = new PrismaClient();
const app = express();

const PORT = process.env.PORT || 3001;


// Apollo code
// The GraphQL schema
async function startApolloServer(): Promise<void>{    
    // A map of functions which return data for the schema.    
    // typeDefs: "/server/graphql/schema.graphql",
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
    app.use(express.static('../client/build'));

    // Express will serve up index.html if it doesn't recognize route (e.g when it's not a defined API request)
    const path = require('path');
    app.get('*', (req, res) => {
        const servePath = path.resolve(__dirname, '..', 'client', 'build', 'index.html')
        console.log("__dirname", path.resolve(__dirname));
        
        console.log("servePath", servePath);
        
        res.sendFile(servePath);
    })
}

app.listen(PORT, () => {
    console.log(`Listening REALLY CLOSELY on port ${PORT}`);
})