/* eslint-disable no-unused-vars */
require('dotenv').config();

const express = require('express');
const routes = require('./routes.js');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); //habilita recebimento em JSON dos clients http
app.use(routes);

// static for audio
app.use(express.static('public'));

// notFound
app.use((req, res, next) => {
  const error = new Error('Not found!');
  error.status = 404;
  next(error);
});

// middleware catch all
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({ error: error.message });
});

app.listen(process.env.PORT, () =>
  console.log('🌐 server is running on port', process.env.PORT)
);
