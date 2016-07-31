exports.up = function(knex, Promise) {
  return knex.schema.
      createTable('mensagem', function (table) {
        table.increments('idmensagem');
        table.string('email').unique();
        table.string('titulomensagem').notNullable();
        table.text('corpomensagem').notNullable();
        table.text('datamensagem');
      })
      .createTable('usuario', function (table) {
        table.increments('idusuario');
        table.string('login').notNullable();
        table.string('pass').notNullable();
        table.string('fullname').notNullable();
      });
    ;
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('mensagem');
};