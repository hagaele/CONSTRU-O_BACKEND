const express = require('express');
const router = express.Router();
const LivroModel = require('../models/livros');

const { validarNovoLivro, validarAtualizarLivro } = require('../validators/LivroValidator');
const { validarID } = require('../validators/IDValidator');

// Rotas do CRUD de Livros
// CREATE
router.post('/livros', validarNovoLivro, async (req, res) => {
  try {
    const livro = req.body;
    const novoLivro = await LivroModel.create(livro);
    res.status(201).json(novoLivro);
  } catch (error) {
    res.status(500).json({ erro: "Ocorreu um erro ao cadastrar o livro." });
  }
});

// READ
router.get('/livros', async (req, res) => {
  try {
    const livros = await LivroModel.find();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ erro: "Ocorreu um erro ao listar os livros." });
  }
});

// READ
router.get('/livros/:id', validarID, async (req, res) => {
  try {
    const id = req.params.id;
    const livroEncontrado = await LivroModel.findById(id);
    if (!livroEncontrado) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }
    res.json(livroEncontrado);
  } catch (error) {
    res.status(500).json({ erro: "Ocorreu um erro ao buscar o livro." });
  }
});

// UPDATE
router.put('/livros/:id', validarID, validarAtualizarLivro, async (req, res) => {
  try {
    const id = req.params.id;
    const novosDados = req.body;
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, novosDados, { new: true });
    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }
    res.json(livroAtualizado);
  } catch (error) {
    res.status(500).json({ erro: "Ocorreu um erro ao atualizar o livro." });
  }
});

// DELETE
router.delete('/livros/:id', validarID, async (req, res) => {
  try {
    const id = req.params.id;
    const livroDeletado = await LivroModel.findByIdAndDelete(id);
    if (!livroDeletado) {
      return res.status(404).json({ erro: "Livro não encontrado." });
    }
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ erro: "Ocorreu um erro ao deletar o livro." });
  }
});

module.exports = router;