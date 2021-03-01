const express = require('express')
const router =  express.Router()
const tarefaController = require('../controllers/tarefaController')

// Listando rotas
router.get('/', tarefaController.listarTarefas)
router.post('/', tarefaController.inserirTarefa)
router.put('/:id', tarefaController.alterarTarefa)
router.delete('/:id', tarefaController.deletarTarefa)

module.exports = router
