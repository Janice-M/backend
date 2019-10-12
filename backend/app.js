const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('Rafiki your request has been received !');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json( 'Asante0, Your request was successful!');
    next();
});

app.use((req, res, next) => {
    console.log('Response sent successfully!');
});

module.exports = app;