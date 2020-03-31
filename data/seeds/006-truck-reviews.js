
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('truck_reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('truck_reviews').insert([
        {diner_id: 1, truck_id: 1, star_rating: 5, review: 'Tacos el Gordo is hands down one of the best taco trucks in Oakland! My mouth is watering writing this review. Favorite tacos are the steak and chicken. The carne asada is cooked to perfection and the chicken is infused with bold flavors, put them both on the same plate next to radishes, grilled onion and a whole jalapeño, fire!'},
        {diner_id: 2, truck_id: 3, star_rating: 4, review: 'great cheap Chinese food'},
        {diner_id: 3, truck_id: 4, star_rating: 2, review: 'Had a horrible experience. They are rude. The food is disgusting. Do not eat here!'},
        {diner_id: 1, truck_id: 2, star_rating: 4, review: 'decent spot'},
        {diner_id: 3, truck_id: 1, star_rating: 4, review: 'Large taco and burrito truck.  Grab a variety of meaty tacos to go and eat in car or at home.  Lots of onions and cilantro and spicy salsa.'},
        {diner_id: 2, truck_id: 1, star_rating: 4, review: `Coming from San Diego, I feel as if it is really hard to find any good Mexican food outside of my home town. Anyway, I was expecting a lot from this place because I heard that this is the spot! And honestly, it's good and I loved the tacos! We ordered 2 al pastor tacos and then a carne asada burrito to share. Now, the reason I give 4 stars is solely because of the tacos. I loved them! The burrito on the other hand, didn't really spark anything different for me. I also ordered the burrito with no rice but there was rice in it anyway. Not a big deal, mistakes happen! But maybe I would've enjoyed it more. Also, parking is verryyyyyyy limited. (We had to wait in the parking lot to leave because someone was blocking us, LOL) But what can you expect in the bay?`}
      ]);
    });
};
