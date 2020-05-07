const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diners').del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {username: 'jevonc', email: 'jevon.cochran@gmail.com', password: bcrypt.hashSync('cochran',8), location: '5542 Foothill Blvd, Oakland, CA'},
        {username: 'kiannap', email: 'kpinkney@gmail.com', password: bcrypt.hashSync('pinkney',8), location: '1322 Campbell St, Oakland, CA'},
        {username: 'leroyg', email: 'leroy.gatlin@gmail.com', password: bcrypt.hashSync('gatlin',8), location: '7220 Krause Ave, Oakland, CA '},
        {username: 'shunc', email: 'shun.chiang@gmail.com', password: bcrypt.hashSync('chiang', 8), location: '3268 San Pablo Ave, Oakland, CA'},
        {username: 'lucass', email: 'lucas.solorzano@gmail.com', password: bcrypt.hashSync('solorzano', 8), location: '3550 Fruitvale Ave, Oakland, CA 94602'},
        {username: 'latashap', email: 'latasha.pollard@gmail.com', password: bcrypt.hashSync('pollard', 8), location: '2607 Myrtle St, Oakland, CA 94607'},
        {username: 'nakiaw', email: 'nakia.woods@gmail.com', password: bcrypt.hashSync('woods', 8), location: '3860 Martin Luther King Jr Way'},
        {username: 'karenw', email: 'karen.white@gmail.com', password: bcrypt.hashSync('white', 8), location: '12250 Skyline Blvd, Oakland, CA'}
      ]);
    });
};
