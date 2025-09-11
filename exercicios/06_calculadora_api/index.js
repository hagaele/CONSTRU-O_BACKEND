const express = require('express');
const app = express();

const calculadoraRouter = require('./router/calculadora');
app.use('/calculadora', calculadoraRouter);

app.listen(3000, () =>{
    console.log("aplicação rodando em http://localhost:3000")
})