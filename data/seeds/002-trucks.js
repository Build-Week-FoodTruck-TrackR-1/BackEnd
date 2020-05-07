
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
          name: 'Big Wang\'s', 
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/gnIQiKLAHMbe-hebriB8KQ/o.jpg', 
          operator_id: 2, 
          cuisine_type: "Chinese",
          current_location: '328 10th St, Oakland, CA 94607'
        },
        {
          name: 'Fortune Cooking', 
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/v2wdgHLsDr845uRWoLM4kg/o.jpg',
          operator_id: 2,
          cuisine_type: 'Chinese',
          current_location: '2811 Telegraph Ave, Berkeley, CA 94705'
        },
        {
          name: 'Tacos El Toro',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/5Ul4rhQatkn_ym1tv-I-Uw/o.jpg',
          operator_id: 1,
          cuisine_type: 'Mexican',
          current_location: '5801 International Blvd, Oakland, CA 94621'
        },
        {
          name: 'Authentic India',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/h2YJG4-dOKEBfnV66MFoaQ/o.jpg',
          operator_id: 4,
          cuisine_type: 'Indian',
          current_location: 'Harrison St &, 19th St, Oakland, CA 94612'
        },
        {
          name: 'Curry Up Now',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/gQpigY6S1kjR1uWKaKnokA/l.jpg',
          operator_id: 5,
          cuisine_type: 'Indian',
          current_location: '1437 Franklin St, Oakland, CA 94612',
        },
        {
          name: 'Marhaban',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/l9dg3e0w-E3tOBKq2NJP_g/o.jpg',
          operator_id: 6,
          cuisine_type: 'Indian',
          current_location: '377 13th St, Oakland, CA 94612'
        },
        {
          name: 'Mi Grullense',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/QHu0H_tDdJdmDEvSnlrihQ/l.jpg',
          operator_id: 1,
          cuisine_type: 'Mexican',
          current_location: '1301 30th Ave, Oakland, CA 94601'
        },
        {
          name: 'Aguachiles El Tamarindo',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/fxbfvx4Z-eKouuP0r-yOmw/o.jpg',
          operator_id: 3,
          cuisine_type: 'Mexican',
          current_location: '3053 International Blvd, Oakland, CA 94601'
        },
        {
          name: 'El Tio Juan Taco Truck',
          image: 'https://s3-media0.fl.yelpcdn.com/bphoto/nUSmPLLOGPBCmnuUCfT5Pw/o.jpg',
          operator_id: 1,
          cuisine_type: 'Mexican',
          current_location: '4075 Foothill Blvd, Oakland, CA 94601'
        },
        {
          name: 'Naan N Curry',
          image: 'https://lh3.googleusercontent.com/-660oLtOhnsY/XiWJ-SNarbI/AAAAAAAAF78/gj5La9FoQQQBGORbBUGffb3knDlKhb6FgCLIBGAYYCw/w960-h960-n-o-k-v1/',
          operator_id: 6,
          cuisine_type: 'Indian',
          current_location: '948 Clay St, Oakland, CA 94607',
        },
        {
         name: 'India On Wheels',
         image: 'https://s3-media0.fl.yelpcdn.com/bphoto/WT69yAT8JHT-ZlK8yRYruA/l.jpg',
         operator_id: 6,
         cuisine_type: 'Indian',
         current_location: '51st St & Telegraph Ave, Oakland, CA 94609'
        }
      ]);
    });
};
