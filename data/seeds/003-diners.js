const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diners').del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {username: 'jevonc', email: 'jevon.cochran@gmail.com', password: bcrypt.hashSync('cochran',8)},
        {username: 'kiannap', email: 'kpinkney@gmail.com', password: bcrypt.hashSync('pinkney',8)},
        {username: 'leroyg', email: 'leroy.gatlin@gmail.com', password: bcrypt.hashSync('gatlin',8)}
      ]);
    });
};
