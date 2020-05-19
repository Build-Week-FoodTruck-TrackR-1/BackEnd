
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders').insert([
        {id: 1, date: '2020-01-01', time: '15:30', diner_id: 1, truck_id: 1, subtotal: 10.50, tip: 1.58, total: 12.08},
        {id: 2, date: '2020-01-02', time: '14:00', diner_id: 2, truck_id: 1, subtotal: 20.00, tip: 3.00, total: 23.00},
        {id: 3, date: '2019-12-31', time: '19:47', diner_id: 3, truck_id: 1, subtotal: 31.00, tip: 3.10, total: 34.10}
      ]);
    });
};
