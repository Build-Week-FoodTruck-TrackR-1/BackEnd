
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
          image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/50699179_607897809662785_7723058806954917888_o.jpg?_nc_cat=102&_nc_sid=2d5d41&_nc_eui2=AeFRxQMRFeT05Yi9a_M94Ljua0Ea5zWw2BBrQRrnNbDYEO5teWWMM5gM8BzUmk7gRnA&_nc_ohc=kmZRnKuwpg8AX-oy2hO&_nc_ht=scontent.fsdu12-1.fna&oh=6811c140e972027b4badba0df69f82e4&oe=5ED7963F', 
          operator_id: 2, 
          cuisine_type: "Chinese",
          current_location: '328 10th St, Oakland, CA 94607'
        },
        {
          name: 'Fortune Cooking', 
          image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/13781749_1238197622889356_7309209962540576076_n.jpg?_nc_cat=111&_nc_sid=110474&_nc_eui2=AeG8aCOjndNWTIEqN1Fn4YYw8I_8yeOhyXrwj_zJ46HJen3rA5RcEyux0Pv5CFzrOlw&_nc_ohc=oFqcGXKxuv0AX8dUygz&_nc_ht=scontent.fsdu12-1.fna&oh=cccb5225de4dc1ec5a62d581939fe940&oe=5ED8FE33',
          operator_id: 2,
          cuisine_type: 'Chinese',
          current_location: '2811 Telegraph Ave, Berkeley, CA 94705'
        },
        {
          name: 'Alo\'s Taco Truck',
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
