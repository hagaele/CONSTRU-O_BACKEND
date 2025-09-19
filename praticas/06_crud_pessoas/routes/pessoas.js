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


//#Criação
// POST /pessoas
router.post('/pessoas', (req,res,next)=> {
    const {nome, cpf, email, dataNascimento} = req.body
    //validando se todos os campos foram preenchidos
    if(!nome || !cpf || !email || !dataNascimento){
        return res.status(400).json({error: "Nome, cpf, emial e dataNascimento são obrigatorios!!!"})
    }
    //validar se o cpf ja foi cadastrado
    if(listaPessoas.some(pessoa => pessoa.cpf == cpf)){
        return res.status(409).json({error: "CPF já cadastrado!!"})
    }

    const novaPessoa = {
        id:Date.now(),
        nome,
        cpf,
        email,
        dataNascimento
    }

    listaPessoas.push(novaPessoa)
     res.status(201).json({message: "pessoa cadastrada com sucesso", novaPessoa})
})

//#Atualização
//PUT //pessoas/:id
router.put("/pessoas/:id", (req,res,next) =>{
    const id = req.params.id
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
// valido se a pessoa existe
if(!pessoa){
    return res.status(404).json({error: "pessoa não encotrada!!!"})
}
//validando se os dados para atualizar vinheram na requisição
const {nome, email, dataNascimento} = req.body
if(!nome || !email || !dataNascimento){
    return res.status(400).json({error: "nome, email e dataNascimento são obrigatorios"})
}

//atualizo os dados da pessoa
pessoa.nome = nome
pessoa.email = email
pessoa.dataNascimento = dataNascimento

//responder com os dados da pessoa atualizados
res.json({message: "pessoa atualizada com sucesso", pessoa})

})


//#Remoção
//DELETE /pessoas/:id
router.delete('/pessoas/:id', (req,res,next)=> {
    const ud = req.params.id
    //validar se a pessoa não existe
    const pessoa = listaPessoas.find(pessoa => pessoa.id == id)
    if(!pessoa){
        return res.status(404).json({error: "pessoa não encontrada!!"})
    }
    listaPessoas = listaPessoas.filter(pessoa => pessoa.id != id)
    res.json({message: "pessoa excluida com sucesso"})
    
})


//exportar o roteaador
module.exports = router 