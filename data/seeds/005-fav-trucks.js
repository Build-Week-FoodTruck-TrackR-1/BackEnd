
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fav_trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('fav_trucks').insert([
        {diner_id: 1, truck_id: 5},
        {diner_id: 2, truck_id: 3},
        {diner_id: 2, truck_id: 4},
        {diner_id: 3, truck_id: 1},
        {diner_id: 3, truck_id: 2},
        {diner_id: 3, truck_id: 3},
        {diner_id: 1, truck_id: 4},
        {diner_id: 1, truck_id: 8},
        {diner_id: 3, truck_id: 7},
        {diner_id: 3, truck_id: 6}
      ]);
    });
};
