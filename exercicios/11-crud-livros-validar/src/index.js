const express = require('express');
const app = express();

app.use(express.json());


const mongoose = require('mongoose');
require('dotenv').config(); 


const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB Atlas!");
  })
  .catch(err => {
    console.log("Erro ao conectar no MongoDB: ", err);
  });


const LivroController = require('./controllers/LivroController');
app.use('/api', LivroController); 


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Aplicação rodando em http://localhost:${PORT}`);
});