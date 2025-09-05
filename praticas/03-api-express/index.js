// importar o express
const express = require('express')

//crio uma instancia(express) da minha aplicação
const app = express()
// guardar o numero da porta que vai ser alocada
const porta = 3000

// Middlewares (intermediarios)
app.use((req, res, next)=>{
    console.log("time: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("rota: ", req.url)
    next()
})
//
//
//
//
app.get('/pessoas', (req,res,next)=>{
    res.send("TESTE TESTANDO 123!!")
})

app.get('/pessoas', (req,res,next) =>{
    const pessoas = [
        {
            id: 1,
            nome: "joao",
            idade: "20"
        },
        {
            id: 2,
            nome:"Pedro",
            idade: "22"
        },
    ]
    res.json(pessoas)
})
// Executa a aplicação escolhendo a porta
app.listen(porta, () => {
    //imprimo uma mensagem para confimar que a aplicação esta funcionando(rodando na porta escolhida)
    console.log("Aplicação rodando em http://localhost:3000")
})