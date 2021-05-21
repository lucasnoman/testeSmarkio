const express = require("express");
const cors = require("cors");
const CommentsController = require("./controllers/CommentsController");
const routes = express.Router();

routes.get("/comments", cors(), CommentsController.index);
routes.post("/comments", cors(), CommentsController.create);
routes.put("/comments/:id", cors(), CommentsController.update);
routes.delete("/comments/:id", cors(), CommentsController.delete);

module.exports = routes;
