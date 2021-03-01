const knex = require('../config/conexao')

// Listando todas as equipes
exports.listarEquipes = async (req, res) => {

        const query = await knex.select('*').from('equipe');

        if (query.length > 0){

          res.status(200)
          res.json(query)

        } else {

          res.status(404)
          res.json({"message": "Nenhuma Equipe Encontrada"})

        }
    }

// Inserindo uma nova equipe
exports.inserirEquipe = async (req, res) => {   

    const equipe = {}
    equipe.nome = req.body.nome,
    equipe.coordenador = req.body.coordenador,
    equipe.dev1 = req.body.dev1,
    equipe.dev2 = req.body.dev2,
    equipe.dev3 = req.body.dev3

    console.log(equipe)

    try{
      await knex('equipe').insert({
        nome: equipe.nome,
        coordenador: equipe.coordenador,
        dev1: equipe.dev1,
        dev2: equipe.dev2,
        dev3: equipe.dev3
      })
      
      res.status(201)
      res.json({"message": "Equipe cadastrada com sucesso"})

    } catch(e){
      throw e;
    }
}

// Alterando uma equipe
exports.alterarEquipe = async (req, res) =>{
    const equipe = {}
    equipe.id = req.params.id,
    equipe.nome = req.body.nome,
    equipe.coordenador = req.body.coordenador,
    equipe.dev1 = req.body.dev1,
    equipe.dev2 = req.body.dev2,
    equipe.dev3 = req.body.dev3

    try{
      const query = await knex('equipe').update({
        nome: equipe.nome,
        coordenador: equipe.coordenador,
        dev1: equipe.dev1,
        dev2: equipe.dev2,
        dev3: equipe.dev3
      }).where('id', equipe.id)

      if(query){
        res.status(202)
        res.json({"message": "Equipe alterada"})
      } else {
        res.status(404)
        res.json({"message": "Equipe não encontrada"})
      }

    }catch(e){
      throw e;
    }       

}

// Deleteando uma equipe
exports.deletarEquipe = async (req, res) => {
    
    const id = req.params.id

    const query = await knex('equipe').delete().where('id', id)
    
    if (query){
      res.status(200)
      res.json({'message': 'Equipe deletada'})
    }else{
      res.status(404)
      res.json({'message': 'Equipe não encontrada'})

    }
}