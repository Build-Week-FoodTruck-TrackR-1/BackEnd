
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diner_uploaded_pics').del()
    .then(function () {
      // Inserts seed entries
      return knex('diner_uploaded_pics').insert([
        {diner_id: 1, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/8OZZ_qCYTJD9yuRxxL7Rhw/o.jpg', truck_id: 1},
        {diner_id: 2, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/2QSx6SsbpFoJkQ9gc2j2TA/o.jpg', truck_id: 1},
        {diner_id: 3, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/b7CbblE_QhzpMvPYzSETLA/o.jpg', truck_id: 1},
        {diner_id: 3, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/pYG2nDGn1ky3eEkTps7qTw/o.jpg', truck_id: 1}
      ]);
    });
};
