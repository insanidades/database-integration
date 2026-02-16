const express = require('express');
const route = express.Router();
const livroDao = require("../modelo/livro-dao")

var { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

route.get("/", async (req, res) => {
  const livros = await livroDao.obterLivros();
  res.json(livros);
});

route.post("/", async (req, res) => {
  try {
    await livroDao.incluir(req.body);
    res.json({ mensagem: "Inclusao efetuada" });
  } catch (err) {
    res.json({ mensagem: "Erro ao incluir livro" });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const codigo = req.params.id;
    await livroDao.excluir(codigo);
    res.json({ mensagem: "Exclusao efetuada" });
  } catch (err) {
    res.json({ mensagem: "Erro ao excluir livro" });
  }
});

module.exports = route;