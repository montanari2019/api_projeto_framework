const knex = require('knex');

exports.up = function(knex) {
    return knex.schema.createTable('tarefa', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.string('responsavel').notNullable();
        table.string('equipe_responsavel').notNullable();
        
        table.integer('id_equipe')
            .notNullable()
            .references('id')
            .inTable('equipe');
    });
}

exports.down = function(knex) {
    return knex.schema.dropTable('tarefa');
}