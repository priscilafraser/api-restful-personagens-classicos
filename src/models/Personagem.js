const mongoose = require("mongoose");

const personagemSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
    lowercase: true
  },
  primeira_aparicao: {
    type: Number,
    require: true,
    lowercase: true
  },
  bordao: {
    type: String,
    require: true,
    lowercase: true
  },
  criadores: {
    type: String,
    require: true,
    lowercase: true
  },
  imagem: {
    type: String,
    require: true,
    lowercase: true
  },
});

module.exports = mongoose.model("Personagem", personagemSchema);
