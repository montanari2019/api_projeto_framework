const knex = require('../config/conexao')

// Listando todas as tarefas
exports.listarTarefas = async (req, res) =>{

  const query = await knex.select('*').from('tarefa');

  if (query.length > 0){

    res.status(200)
    res.json(query)

  } else {

    res.status(404)
    res.json({"message": "Nenhuma Tarefa Encontrada"})

  }

}

// Alterando uma tarefa
exports.alterarTarefa = async (req, res) => {
  
  const tarefa = {}
  tarefa.id = req.params.id
  tarefa.titulo = req.body.titulo,
  tarefa.descricao = req.body.descricao,
  tarefa.responsavel = req.body.responsavel,
  tarefa.equipe_responsavel = req.body.equipe_responsavel,
  tarefa.id_equipe = req.body.id_equipe


  try{
    const query = await knex('tarefa').update({
      titulo: tarefa.titulo,
      descricao: tarefa.descricao,
      responsavel: tarefa.responsavel,
      equipe_responsavel: tarefa.equipe_responsavel,
      id_equipe: tarefa.id_equipe
    }).where('id', tarefa.id)
    
    if (query){

      res.status(202)
      res.json({"message": "Tarefa alterada"})

    } else {

      res.status(404)
      res.json({"message": "Tarefas não encontrada"})
    }
  } catch(e){
    throw e;
  }
}


// Inserindo uma nova tarefa
exports.inserirTarefa = async (req, res) =>{

    console.log(req.body)

    const tarefa = {}
    tarefa.titulo = req.body.titulo,
    tarefa.descricao = req.body.descricao,
    tarefa.responsavel = req.body.responsavel,
    tarefa.equipe_responsavel = req.body.equipe_responsavel,
    tarefa.id_equipe = req.body.id_equipe


    try{
      await knex('tarefa').insert({
        titulo: tarefa.titulo,
        descricao: tarefa.descricao,
        responsavel: tarefa.responsavel,
        equipe_responsavel: tarefa.equipe_responsavel,
        id_equipe: tarefa.id_equipe
      })
      
      res.status(201)
      res.json({"message": "Tarefa cadastrada com sucesso"})

    } catch(e){
      throw e;
    }
}

// Deleteando uma tarefa
exports.deletarTarefa = async (req, res) =>{

    const id = req.params.id

    const query = await knex('tarefa').delete().where('id', id)
    
    if (query){
      res.status(200)
      res.json({'message': 'Tarefa deletada'})
    }else{
      res.status(404)
      res.json({'message': 'Tarefa não encontrada'})

    }
    
}
