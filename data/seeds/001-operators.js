const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {username: 'juanz', email: 'juan.zamora@gmail.com', password: bcrypt.hashSync('zamora', 8)},
        {username: 'gyang', email: 'gregory.zang@gmail.com', password: bcrypt.hashSync('yanggang', 8)},
        {username: 'noelg', email: 'noel.gallo@gmail.com', password: bcrypt.hashSync('gallo', 8)},
        {username: 'aladinm', email: 'aladin.moktar@gmail.com', password: bcrypt.hashSync('moktar', 8) },
        {username: 'ananyac', email: 'ananya.chopra@gmail.com', password: bcrypt.hashSync('chopra', 8)},
        {username: 'bharatz', email: 'bharat.zafar@gmail.com', password: bcrypt.hashSync('zafar', 8)}
      ]);
    });
};
