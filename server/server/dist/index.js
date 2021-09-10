"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3001;
app.get("/api/test", (req, res) => {
    res.send("Server functioning");
});
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
