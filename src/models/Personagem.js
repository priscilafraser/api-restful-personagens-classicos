const mongoose = require("mongoose");

const personagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  primeira_aparicao: {
    type: String,
    require: true,
  },
  bordao: {
    type: String,
    require: true,
  },
  criadores: {
    type: String,
    require: true,
  },
  imagem: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Personagem", personagemSchema);
