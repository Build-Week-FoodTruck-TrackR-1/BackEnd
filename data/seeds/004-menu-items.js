
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('menu_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('menu_items').insert([
        {name: 'carne asada taco', price: 2.00, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/uJ98uUzNUA1ChGJ0o0lNlg/o.jpg', category: 'entree', truck_id: 1},
        {name: 'buche taco', price: 2.50, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/31jAr3feZ2RQB8JUmOjNkA/o.jpg', category: 'entree', truck_id: 1},
        {name: 'al pastor taco', price: 2.00, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/VRISVBfRXLAXekjX2to4UA/o.jpg', category: 'entree', truck_id: 1},
        {name: 'chicken taco', price: 2.00, image: 'https://tacos10.com/wp-content/uploads/2018/12/tacos-mexicanos-de-pollo.jpg', category: 'entree', truck_id: 1},
        {name: 'carne asada burrito', price: 8.00, image: 'https://www.cocogrill.net/wp-content/uploads/2019/04/recetas-para-hacer-burritos-de-carne-asada-cocogrill.jpg', category: 'entree', truck_id: 1},
        {name: 'horchata', price: 2.50, image: 'https://s3-media4.fl.yelpcdn.com/bphoto/6E0Jt3f_NTo8b3eJvGX1dQ/258s.jpg', category: 'drink', truck_id: 1},
        {name: 'tamarindo', price: 2.50, category: 'drink', truck_id: 1},
        {name: 'can soda', description: '8 oz can', price: 2.00, category: 'drink', truck_id: 1},
        {name: 'carne asada taco', price: 2.00, image: 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/04/carne-asada-tacos-8.jpg', category: 'entree', truck_id: 2},
        {name: 'carne asada burrito', price: 8.50, image: 'https://carneandpapas.com/wp-content/uploads/2014/04/burritobuild.jpg', category: 'entree', truck_id: 2},
        {name: 'torta de al pastor', description: 'big sandwich with steak, lettuce, tomtoes, onions, mayo and salsa', price: 8.00, image: 'https://images1.phoenixnewtimes.com/imager/u/745xauto/9715618/img_9448.jpg', category: 'entree', truck_id: 2},
        {name: 'fried rice', price: 6.00, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/53408405_627465921039307_5221191832494407680_o.jpg?_nc_cat=109&_nc_sid=2d5d41&_nc_eui2=AeFP9zO7S5NkXlJSCFIjZ0aHiAIB2FS0d-WIAgHYVLR35TlfmxD7DyfeAH55QI7GzEU&_nc_ohc=1mIsaZMyeBgAX8wY_D4&_nc_ht=scontent.fsdu12-1.fna&oh=4c8f09f20c4b71847ef758bc1df2faf1&oe=5ED97951', category: 'side', truck_id: 3},
        {name: 'orange chicken', description: 'orange chicken with rice', price: 11.00, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/69874990_743529139432984_1019469260038078464_o.jpg?_nc_cat=103&_nc_sid=2d5d41&_nc_eui2=AeFIaGdAtVw-JtH_CO5iyfq-vQE_fJISu429AT98khK7jWbgp7CFFxpvavSSksf4l8s&_nc_ohc=N6r2ZgxvwgMAX-aymH9&_nc_ht=scontent.fsdu12-1.fna&oh=baef9555e4ccc95bf22eb68c0d768c02&oe=5ED873F0', category: 'entree', truck_id: 3},
        {name: 'general tsos chicken', description: 'spicy chicken plate with rice', price: 11.00, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/50699179_607897809662785_7723058806954917888_o.jpg?_nc_cat=102&_nc_sid=2d5d41&_nc_eui2=AeFRxQMRFeT05Yi9a_M94Ljua0Ea5zWw2BBrQRrnNbDYEO5teWWMM5gM8BzUmk7gRnA&_nc_ohc=kmZRnKuwpg8AX-oy2hO&_nc_ht=scontent.fsdu12-1.fna&oh=6811c140e972027b4badba0df69f82e4&oe=5ED7963F', category: 'entree', truck_id: 3},
        {name: 'egg roll', price: 2.00, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/60660614_674201446365754_3218127606578675712_o.jpg?_nc_cat=100&_nc_sid=2d5d41&_nc_eui2=AeFDJoFYsQOj3UWg_YdIRFiCoOUbGwojyYqg5RsbCiPJimMv784C_ROftSYYC1I_8D0&_nc_ohc=24iNyy1sViYAX8t7ShW&_nc_ht=scontent.fsdu12-1.fna&oh=aa66c0bf41d153795a2190292aa5f064&oe=5ED75E4B', category: 'side', truck_id: 3},
        {name: 'can soda', description: '8 oz can', price: 2.00, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/61886230_683833152069250_4655567514607026176_o.jpg?_nc_cat=108&_nc_sid=2d5d41&_nc_eui2=AeGiHFy-r4oyv-LxSJwqKtgcJq0V8KBc55ImrRXwoFznkua29O1tJKOVjoIGVrNcyR0&_nc_ohc=fJj7kXoYC9sAX_OsEWB&_nc_ht=scontent.fsdu12-1.fna&oh=f06d97438840a12ccf997f581582d973&oe=5ED9C814', category: 'drink', truck_id: 3},
        {name: 'carne asada tacos', price: 2.00, category: 'entree', truck_id: 5},
        {name: 'carne asada burrito', price: 8.00, category: 'entree', truck_id: 5},
        {name: 'carne asada fries', price: 11.00, category: 'entree', truck_id: 5},
        {name: 'horchata', price: 2.50, category: 'drink', truck_id: 5},
        {name: 'egg foo young', description: 'fried egg dish with meat and gracy', price: 10.00, category: 'entree', truck_id: 4},
        {name: 'shrimp fried rice', price: 10.00, category: 'entree', truck_id: 4},
      ]);
    });
};
