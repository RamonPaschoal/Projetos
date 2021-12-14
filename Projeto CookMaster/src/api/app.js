const express = require('express');
const path = require('path');

const error = require('../middleware/erro');
const root = require('../controllers/root');

const app = express();

app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/', root);

app.use('/images', express.static(path.resolve(__dirname, '../uploads')));

app.use(error);

module.exports = app;
