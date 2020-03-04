
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('truck_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('truck_reviews').insert([
        {diner_id: 1, truck_id: 1, star_rating: 5, review: 'great, absolutely loved it!'},
        {diner_id: 2, truck_id: 3, star_rating: 4, review: 'great cheap Chinese food'},
        {diner_id: 3, truck_id: 4, star_rating: 2, review: 'Had a horrible experience. They are rude. The food is disgusting. Do not eat here!'}
      ]);
    });
};
