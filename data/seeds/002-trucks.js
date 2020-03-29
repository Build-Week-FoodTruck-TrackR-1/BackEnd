
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {
          name: 'Tacos El Gordo', 
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/9vtpwRel1gua6nfwRghteg/l.jpg', 
          operator_id: 1, 
          cuisine_type: 'Mexican',
          current_location: '4201 International Blvd, Oakland, CA 94601'
        },
        {
          name: 'Taqueria Mi Rancho', 
          image: 'https://media-cdn.tripadvisor.com/media/photo-s/0f/f2/a6/1e/photo0jpg.jpg', 
          operator_id: 3, 
          cuisine_type: 'Mexican',
          current_location: '1434 1st Ave, Oakland, CA 94606'
        },
        {
          name: 'Yang Chinese Food', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuEwzXecCmw7cNrVlsVq1wKv1m6zg_X-LBvXmqoeRLtw3bIJo9', 
          operator_id: 2, 
          cuisine_type: "Chinese",
          current_location: '328 10th St, Oakland, CA 94607'
        },
        {
          name: 'Taste of China Street Food', 
          image: 'https://tucsonfoodie.com/wp-content/uploads/2019/07/TF-American-Asian-randall-irby-lemongrass-beef-bowl-0204-1024x683.jpg',
          operator_id: 2,
          cuisine_type: 'Chinese',
          current_location: '2811 Telegraph Ave, Berkeley, CA 94705'
        },
        {
          name: 'Tacos El Toro',
          image: 'https://media1.fdncms.com/metrotimes/imager/u/blog/3604582/screen_shot_2017-05-02_at_4.32.23_pm.png?cb=1531348072',
          operator_id: 1,
          cuisine_type: 'Mexican',
          current_location: '5801 International Blvd, Oakland, CA 94621'
        }
      ]);
    });
};
