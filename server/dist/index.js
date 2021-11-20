"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const client_1 = require("@prisma/client");
const schema_1 = require("./graphql/schema");
const resolvers_1 = require("./graphql/resolvers");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
// Apollo code
// The GraphQL schema
function startApolloServer() {
    return __awaiter(this, void 0, void 0, function* () {
        // A map of functions which return data for the schema.    
        // typeDefs: "/server/graphql/schema.graphql",
        const apolloServer = new apollo_server_express_1.ApolloServer({
            typeDefs: schema_1.typeDefs,
            resolvers: resolvers_1.resolvers,
            context: {
                prisma
            }
        });
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app, path: '/api' });
    });
}
startApolloServer();
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like main.js/css file
    app.use(express_1.default.static('../client/build'));
    // Express will serve up index.html if it doesn't recognize route (e.g when it's not a defined API request)
    const path = require('path');
    app.get('*', (req, res) => {
        const servePath = path.resolve(__dirname, '..', 'client', 'build', 'index.html');
        console.log(servePath);
        res.sendFile(servePath);
    });
}
app.listen(PORT, () => {
    console.log(`Listening REALLY CLOSELY on port ${PORT}`);
});
