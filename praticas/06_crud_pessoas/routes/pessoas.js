const express = require('express');
const router = express.Router();

//lista de pessoas para simular
let listaPessoas = [
    {
        id: 1,
        nome: "joao",
        cpf: "123456789",
        email: "joao@email.com",
        dataNascimento: "01/01/2000"
    },
    {
        id: 2,
        nome: "Maria",
        cpf: "987654321",
        email: "maria@email.com",
        dataNascimento: "02/02/1999"
    }
]

//mapear as rotas e a logica
//#Buscar
// GET /pessoas
router.get('/pessoas', (req,res,next) => {
    res.json(listaPessoas)
})

//#Busca por iD
//GET /pessoas/ :id
router.get('/pessoas/:id',(req,res,next) => {
    //recebendo o ID como parametro dinamico
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if(!pessoa) {
        return res.status(404).json({error: "pessoa não encontrada!!!"})
    }
    res.json(pessoa)
})

//exportar o roteaador
module.exports = router 