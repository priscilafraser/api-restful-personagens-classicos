const express = require("express");
const routes = express.Router();

//const routes = require("express").Router();

const PersonagemController = require("../controllers/PersonagensControllers");
const PersonagemMiddleware = require("../middlewares/PersonagensMiddlewares");

routes.get("/personagens", PersonagemController.getAll);
routes.get("/personagens/:id", PersonagemMiddleware.validaId, PersonagemController.getById);


module.exports = routes;
