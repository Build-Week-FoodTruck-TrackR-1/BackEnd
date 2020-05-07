
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
        {diner_id: 2, truck_id: 1, star_rating: 4, review: `Coming from San Diego, I feel as if it is really hard to find any good Mexican food outside of my home town. Anyway, I was expecting a lot from this place because I heard that this is the spot! And honestly, it's good and I loved the tacos! We ordered 2 al pastor tacos and then a carne asada burrito to share. Now, the reason I give 4 stars is solely because of the tacos. I loved them! The burrito on the other hand, didn't really spark anything different for me. I also ordered the burrito with no rice but there was rice in it anyway. Not a big deal, mistakes happen! But maybe I would've enjoyed it more. Also, parking is verryyyyyyy limited. (We had to wait in the parking lot to leave because someone was blocking us, LOL) But what can you expect in the bay?`},
        {diner_id: 2, truck_id: 7, star_rating: 5, review: "Forgot how much I love this place! Chicken tikka masala burrito is my go-to, I'm super uncomfortably stuffed if I eat the whole thing, but I can't seem to stop eating after just half. Last night we also tried the Lamb Quesadillix. My husband really liked it, and all its separate components too (the wrap, the lamb, the potatoes). I thought it was a bit too flavorful, but that's a hard thing to ding a fusion quesadilla on. I can't wait to come back, even if I'm supporting remotely through these Covid-19 times!"},
        {diner_id: 3, truck_id: 7, star_rating: 5, review: 'The menu is extensive. And the food was still hot when we unpacked it at home. Plus, super fresh flavors. Highly recommend.'},
        {diner_id: 1, truck_id: 7, star_rating: 4, review: "Curry up now never disappoints. It's Indian comfort food at its finest. They have unique fusion takes on Indian street food often resulting in yummy in the tummy creations."}
      ]);
    });
};
