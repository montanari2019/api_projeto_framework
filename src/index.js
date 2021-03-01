const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())


// Criando rota 
app.get('/api/v1', (req, res) => {
  res.json({
    message: "API Genrenciador de equipes v1" 
  })
})

// Rotas
const equipeRouter = require('./routes/equipeRouter')
app.use('/api/v1/equipes', equipeRouter)

const tarefaRouter = require('./routes/tarefaRouter')
app.use('/api/v1/tarefas', tarefaRouter)


// Passando porta 
const port = 3010
app.listen(process.env.PORT, () => { console.log(`Servidor rodando na porta ${process.env.PORT}`) })