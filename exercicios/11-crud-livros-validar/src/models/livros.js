const mongoose = require('mongoose');

// Define o schema do livro 
const livroSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    autor: { type: String, required: true }, 
    editora: { type: String, required: true }, 
    ano: { type: Number, required: false }, 
    preco: { type: Number, required: true } 
  },
  {
    timestamps: true
  }
);


const LivroModel = mongoose.model('Livro', livroSchema);

module.exports = LivroModel;