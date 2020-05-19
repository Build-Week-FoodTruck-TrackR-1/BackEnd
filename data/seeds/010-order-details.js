
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('order_details').del()
    .then(function () {
      // Inserts seed entries
      return knex('order_details').insert([
        {order_id: 1, item: 'carne asada taco', item_id: 1, quantity: 4, diner_id: 1, truck_id: 1},
        {order_id: 1, item: 'horchata', item_id: 6, quantity: 1, diner_id: 1, truck_id: 1},
        {order_id: 2, item: 'carne asada burrito', item_id: 5, quantity: 2, diner_id: 2, truck_id: 1},
        {order_id: 2, item: 'can soda', item_id: 8, quantity: 2, diner_id: 2, truck_id: 1},
        {order_id: 3, item: 'chicken taco', item_id: 4, quantity: 4, diner_id: 3, truck_id: 1},
        {order_id: 3, item: 'al pastor taco', item_id: 3, quantity: 4, diner_id: 3, truck_id: 1},
        {order_id: 3, item: 'carne asada taco', item_id: 1, quantity: 4, diner_id: 3, truck_id: 1},
        {order_id: 3, item: 'horchata', item_id: 6, quantity: 2, diner_id: 3, truck_id: 1},
        {order_id: 3, item: 'can soda', item_id: 8, quantity: 1, diner_id: 3, truck_id: 1}
      ]);
    });
};
