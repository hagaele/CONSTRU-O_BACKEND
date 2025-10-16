const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB")
  })
  .catch(err => {
    console.log("Erro ao conectar no banco MongoDB: ", err)
  })


const LivroModel = mongoose.model('Livros', new mongoose.Schema({
  titulo: String,
  autor: String,
  editora: String,
  ano: Number,
  preco: Number
}));

// CREATE 
app.post('/livros', async (req, res) => {
  const { titulo, autor, editora, ano, preco } = req.body;
  if (!titulo || !autor || !editora || !ano || !preco) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
  }
  const novoLivro = await LivroModel.create({ titulo, autor, editora, ano, preco });
  res.status(201).json(novoLivro);
});

// READ
app.get('/livros', async (req, res) => {
  const livros = await LivroModel.find();
  res.json(livros);
});

// READ POR ID
app.get('/livros/:id', async (req, res) => {
    const livro = await LivroModel.findById(req.params.id);
    if (!livro) {
        return res.status(404).json({ erro: "Livro não encontrado." });
    }
    res.json(livro);
});

// UPDATE
app.put('/livros/:id', async (req, res) => {
  const { titulo, autor, editora, ano, preco } = req.body;
  if (!titulo || !autor || !editora || !ano || !preco) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios!" });
  }
  const livroAtualizado = await LivroModel.findByIdAndUpdate(req.params.id, { titulo, autor, editora, ano, preco }, { new: true });
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado." });
  }
  res.json(livroAtualizado);
});

// DELETE
app.delete('/livros/:id', async (req, res) => {
  const livroRemovido = await LivroModel.findByIdAndDelete(req.params.id);
  if (!livroRemovido) {
    return res.status(404).json({ erro: "Livro não encontrado." });
  }
  res.json({ mensagem: "Livro removido com sucesso!" });
});





app.listen(3000, () => {
  console.log("🚀 Aplicação a ser executada em http://localhost:3000");
});

