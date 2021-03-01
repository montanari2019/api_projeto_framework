const knex = require('knex');

exports.up = function(knex) {
    return knex.schema.createTable('equipe', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('coordenador').notNullable();
        table.string('dev1').notNullable();
        table.string('dev2').notNullable();
        table.string('dev3').notNullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTable('equipe');
}