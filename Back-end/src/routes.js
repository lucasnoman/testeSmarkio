const express = require('express');
// const UserController = require('./controllers/UserController');
// const ProjectController = require('./controllers/ProjectController');
const CommentsController = require('./controllers/CommentsController');

const routes = express.Router();

// routes.get('/users', UserController.index);
// routes.post('/users', UserController.create);
// routes.put('/users/:id', UserController.update);
// routes.delete('/users/:id', UserController.delete);

// routes.get('/projects', ProjectController.index);
// routes.post('/projects', ProjectController.create);

routes.get('/comments', CommentsController.index);
routes.post('/comments', CommentsController.create);
routes.put('/comments/:id', CommentsController.update);
routes.delete('/comments/:id', CommentsController.delete);

module.exports = routes;
