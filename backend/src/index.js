const express = require('express');

const app = express();
const port = 3050;

app.get('/tasks', (request, response) => response.status(200).send('Criando app'));


app.listen(port, () => console.log('Server running on port 3050'));