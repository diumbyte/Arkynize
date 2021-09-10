// const express = require('express');
import express from 'express';
const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api/test", (req, res) => {
    res.send("Server functioning");
})

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like main.js/css file
    app.use(express.static('../client/build'));

    // Express will serve up index.html if it doesn't recognize route (e.g when it's not a defined API request)
    const path = require('path');
    app.get('*', (req, res) => {
        const servePath = path.resolve(__dirname, '..', 'client', 'build', 'index.html')
        console.log(servePath);
        res.sendFile(servePath);
    })
}

app.listen(PORT, () => {
    console.log(`Listening REALLY CLOSELY on port ${PORT}`);
})