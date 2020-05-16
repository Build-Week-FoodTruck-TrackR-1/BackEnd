
exports.seed = function(knex) {
  // Deletes ALL existing entries
  // return knex('diner_cards').del()
  //   .then(function () {
      // Inserts seed entries
      return knex('diner_cards').insert([
        {diner_id: 8, name: 'Karen White', num: '4848484848484848', exp_date: '0720', cvc: '123', zip: '94605'}
      ]);
    // });
};
