
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
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/zqXapZU8YR7SOj_epJboJw/o.jpg', 
          operator_id: 3, 
          cuisine_type: 'Mexican',
          current_location: '1434 1st Ave, Oakland, CA 94606'
        },
        {
          name: 'Yang Chinese Food', 
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/gnIQiKLAHMbe-hebriB8KQ/o.jpg', 
          operator_id: 2, 
          cuisine_type: "Chinese",
          current_location: '328 10th St, Oakland, CA 94607'
        },
        {
          name: 'Taste of China Street Food', 
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/v2wdgHLsDr845uRWoLM4kg/o.jpg',
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
