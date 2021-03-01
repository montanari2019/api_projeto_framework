const express = require('express')
const router = express.Router()
const equipeController = require('../controllers/equipeController')

// Lista de rotas
router.get('/', equipeController.listarEquipes)
router.post('/', equipeController.inserirEquipe)
router.put('/:id', equipeController.alterarEquipe)
router.delete('/:id', equipeController.deletarEquipe)

module.exports = router