const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diners').del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {username: 'jevonc', email: 'jevon.cochran@gmail.com', password: bcrypt.hashSync('cochran',8), location: '5542 Foothill Blvd, Oakland, CA'},
        {username: 'kiannap', email: 'kpinkney@gmail.com', password: bcrypt.hashSync('pinkney',8), location: '1322 Campbell St, Oakland, CA'},
        {username: 'leroyg', email: 'leroy.gatlin@gmail.com', password: bcrypt.hashSync('gatlin',8), location: '7220 Krause Ave, Oakland, CA '}
      ]);
    });
};
