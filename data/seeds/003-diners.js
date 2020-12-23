const bcrypt = require('bcryptjs'),
    FlakeIdGen = require('flake-idgen'),
    intformat = require('biguint-format'),
    generator = new FlakeIdGen()

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diners').del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {name: 'Jevon Cochran', username: 'jevonc', email: 'jevon.cochran@gmail.com', password: bcrypt.hashSync('cochran',8), profile_pic: 'https://firebasestorage.googleapis.com/v0/b/food-truck-trackr-files.appspot.com/o/diner-profile-pics%2FIMG_5269.jpg?alt=media&token=7de13bae-a813-477a-8676-b8b851d36c71', country: 'United States', language: 'English', location: '5542 Foothill Blvd, Oakland, CA', stripe_id: intformat(generator.next(), 'dec')},
        {name: 'Kianna Pinkney', username: 'kiannap', email: 'kpinkney@gmail.com', password: bcrypt.hashSync('pinkney',8), country: 'United States', language: 'English', location: '1322 Campbell St, Oakland, CA', stripe_id: intformat(generator.next(), 'dec')},
        {name: 'Leroy Gatlin', username: 'leroyg', email: 'leroy.gatlin@gmail.com', password: bcrypt.hashSync('gatlin',8), country: 'United States', language: 'English', location: '7220 Krause Ave, Oakland, CA ', stripe_id: intformat(generator.next(), 'dec')},
        {name: 'Shun Chiang', username: 'shunc', email: 'shun.chiang@gmail.com', password: bcrypt.hashSync('chiang', 8), country: 'United States', language: 'English', location: '3268 San Pablo Ave, Oakland, CA', stripe_id: intformat(generator.next(), 'dec')},
        {name: 'Lucas Solorzano', username: 'lucass', email: 'lucas.solorzano@gmail.com', password: bcrypt.hashSync('solorzano', 8), country: 'United States', language: 'English', location: '3550 Fruitvale Ave, Oakland, CA 94602', stripe_id: intformat(generator.next(), 'dec')},
        {name: 'Latasha Pollard', username: 'latashap', email: 'latasha.pollard@gmail.com', password: bcrypt.hashSync('pollard', 8), country: 'United States', language: 'English', location: '2607 Myrtle St, Oakland, CA 94607', stripe_id: intformat(generator.next(), 'dec')},
        {name: 'Nakia Woods', username: 'nakiaw', email: 'nakia.woods@gmail.com', password: bcrypt.hashSync('woods', 8), country: 'United States', language: 'English', location: '3860 Martin Luther King Jr Way', stripe_id: intformat(generator.next(), 'dec')},
        {name: 'Karen White', username: 'karenw', email: 'karen.white@gmail.com', password: bcrypt.hashSync('white', 8), country: 'United States', language: 'English', location: '12250 Skyline Blvd, Oakland, CA', stripe_id: intformat(generator.next(), 'dec')}
      ]);
    });
};
