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

//conectar no banco mongo

mongoose.connect('mongodb+srv://hagaele:tbYtchzj4DdefMNY@cluster0.0vh0gpg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
    console.log("concetando ao mongo")
})
.catch(err =>{
    console.log("erro ao conectar ao banco mongodb")
})

app.listen(3000, () =>{
    console.log("plicação rodando em http://localhost:3000")
})