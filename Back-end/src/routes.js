const express = require('express');
const cors = require('cors');
const CommentsController = require('./controllers/CommentsController');
const routes = express.Router();

// TODO: Verificar porque o cors não está funcionando apenas com o 'app.use(cors());' no server.js
routes.get('/comments', cors(), CommentsController.index);
routes.post('/comments', cors(), CommentsController.create);
routes.put('/comments/:id', cors(), CommentsController.update);
routes.delete('/comments/:id', cors(), CommentsController.delete);

module.exports = routes;
