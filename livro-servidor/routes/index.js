const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mensagem: "API da Livraria rodando" });
});

module.exports = router;
