//importar o express
const express = require('express')

//criar um router(Roteador)
const router = express.Router()

//mapeamento das rotas e implemento logica 

router.get('/notaA1', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    //validar se os paramentros exitem
    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({erro: "Notas invalidas!!"})
    }

    //validar se as notas estao no intervalo correto
    if(exercicio <0 || exercicio > 1 || trabalho < 0 || trabalho > 3 || prova < 0 || prova < 6){
        return res.status(400).json({erro: "Notas fora do intervalo"})
    }




    console.log(exercicio, trabalho, prova)

    const notaA1 = exercicio + trabalho + prova
    res.json({ notaA1 })
})

//calcula a nota do A2









//exportar o router
module.exports = router