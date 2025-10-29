const yup = require('yup');

// Schema de validação para a CRIAÇÃO
const schemaNovoLivro = yup.object({
  titulo: yup.string().required("O campo 'título' é obrigatório"),
  autor: yup.string().required("O campo 'autor' é obrigatório"),
  editora: yup.string().required("O campo 'editora' é obrigatório"),
  ano: yup.number().integer("O campo 'ano' deve ser um número inteiro").required("O campo 'ano' é obrigatório"), 
  preco: yup.number().positive("O campo 'preco' deve ser um número positivo").required("O campo 'preco' é obrigatório") 
});

// Schema de validação para a ATUALIZAÇÃO 
const schemaAtualizarLivro = yup.object({
  titulo: yup.string(),
  autor: yup.string(),
  editora: yup.string(),
  ano: yup.number().integer("O campo 'ano' deve ser um número inteiro"),
  preco: yup.number().positive("O campo 'preco' deve ser um número positivo")
});


// Middleware que usa o schema para validar a criação 
async function validarNovoLivro(req, res, next) {
  try {
    // retorna todos os erros de validação de uma vez
    await schemaNovoLivro.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const erros = error.inner.map(err => ({
      campo: err.path,
      mensagem: err.message
    }));
    return res.status(400).json({ erros });
  }
}

// Middleware que usa o schema para validar a atualização
async function validarAtualizarLivro(req, res, next) {
  try {
    await schemaAtualizarLivro.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const erros = error.inner.map(err => ({
      campo: err.path,
      mensagem: err.message
    }));
    return res.status(400).json({ erros });
  }
}

module.exports = {
  validarNovoLivro,
  validarAtualizarLivro
};