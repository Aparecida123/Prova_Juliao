const express = require("express");

const routes = express.Router();
const ProductsController = require("../controller/ProductsController")

routes.get("/", (req, res) => res.send("<h1>Hello World</h1>"));

routes.get("/listar", ProductsController.listaDeProdutos);                                                                                                                               

routes.get("/listar/:id", ProductsController.listaDeProdutosSo);

routes.post("/postar", ProductsController.postarProdutos);

routes.put("/atualizar", ProductsController.atualizarProdutos);

routes.delete("/deletar", ProductsController.deletarProdutos);
module.exports = routes;