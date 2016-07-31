
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('usuario').del(),

    // Inserts seed entries
    knex('usuario').insert({login: 'admin', pass: '1234', fullname: 'macabeus'})
  );
};
