//importe o express
const express = require('express')

//crio uma instancia dp ex´ress
const app = express()

// MIddlewares (intermediario)
app.use((req,res,next) =>{
    console.log("--------###------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req , res, next) => {

    //captura informação do usuario
    //vao vir atraves dos paramentros da requisição (query params)
    const primeiroNome = req.query.primeiroNome
    const segundoNome = req.query.segundoNome
    res.send("Funcionou!!!" + primeiroNome + " " + segundoNome + " !!!")
})

//importando o router de calculadoraNota
const calculadoraNotaRouter = require('./routes/CalculadoraNota')
//Toda requisição que chegar na rota /calculadora vai para o router
app.use('/calculadora', calculadoraNotaRouter)


//executa a aplicação
app.listen(3000, () =>{
    console.log("aplicação rodando em http://localhost:3000")
})