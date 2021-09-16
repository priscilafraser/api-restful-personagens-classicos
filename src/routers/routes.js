const express = require("express");
const routes = express.Router();

//const routes = require("express").Router();

const PersonagemController = require("../controllers/PersonagensControllers");
const PersonagemMiddleware = require("../middlewares/PersonagensMiddlewares");

routes.get("/personagens", PersonagemController.getAll);
routes.get(
  "/personagens/:id",
  PersonagemMiddleware.validaId,
  PersonagemController.getById
);
routes.post("/personagens", PersonagemController.create);
routes.put(
  "/personagens/:id",
  PersonagemMiddleware.validaId,
  PersonagemController.update
);
routes.delete(
  "/personagens/:id",
  PersonagemMiddleware.validaId,
  PersonagemController.del
);
routes.get("/filterByName", PersonagemController.filterByName);

module.exports = routes;
