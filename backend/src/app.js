const express = require('express');

const app = express();

app.get('/', (req, res) => res.sendStatus(200).send('Olá'));

module.exports = app;