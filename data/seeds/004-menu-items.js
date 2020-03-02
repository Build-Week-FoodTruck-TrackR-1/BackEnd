
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_items').insert([
        {name: 'carne asada tacos', price: 2.00, truck_id: 1},
        {name: 'carne asada burrito', price: 8.00, truck_id: 1},
        {name: 'cheese quesadilla', price: 6.00, truck_id: 1},
        {name: 'carne asada tacos', price: 2.00, truck_id: 2},
        {name: 'carne asada burrito', price: 8.50, truck_id: 2},
        {name: 'torta de al pastor', description: 'big sandwich with steak, lettuce, tomtoes, onions, mayo and salsa', price: 8.00, truck_id: 2},
        {name: 'sweet and sour chicken', description: 'sweet and sour chicken with rice', price: 11.00, truck_id: 3},
        {name: 'orange chicken', description: 'orange chicken with rice', price: 11.00, truck_id: 3},
        {name: 'general tsos chicken', description: 'spicy chicken plate with rice', price: 11.00, truck_id: 3},
        {name: 'carne asada tacos', price: 2.00, truck_id: 5},
        {name: 'carne asada burrito', price: 8.00, truck_id: 5},
        {name: 'carne asada fries', price: 11.00, truck_id: 5},
        {name: 'horchata', price: 2.50, truck_id: 5},
        {name: 'egg foo young', description: 'fried egg dish with meat and gracy', price: 10.00, truck_id: 4},
        {name: 'shrimp fried rice', price: 10.00, truck_id: 4},
      ]);
    });
};
