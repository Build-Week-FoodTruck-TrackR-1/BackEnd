
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_items').insert([
        {name: 'carne asada tacos', price: 2.00, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/uJ98uUzNUA1ChGJ0o0lNlg/o.jpg', truck_id: 1},
        {name: 'buche tacos', price: 2.50, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/31jAr3feZ2RQB8JUmOjNkA/o.jpg', truck_id: 1},
        {name: 'al pastor tacos', price: 2.00, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/VRISVBfRXLAXekjX2to4UA/o.jpg', truck_id: 1},
        {name: 'horchata', price: 2.50, image: 'https://s3-media4.fl.yelpcdn.com/bphoto/6E0Jt3f_NTo8b3eJvGX1dQ/258s.jpg', truck_id: 1},
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
