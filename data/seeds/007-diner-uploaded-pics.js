
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diner_uploaded_pics').del()
    .then(function () {
      // Inserts seed entries
      return knex('diner_uploaded_pics').insert([
        {diner_id: 1, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/8OZZ_qCYTJD9yuRxxL7Rhw/o.jpg', truck_id: 1},
        {diner_id: 2, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/2QSx6SsbpFoJkQ9gc2j2TA/o.jpg', truck_id: 1},
        {diner_id: 3, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/b7CbblE_QhzpMvPYzSETLA/o.jpg', truck_id: 1},
        {diner_id: 3, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/pYG2nDGn1ky3eEkTps7qTw/o.jpg', truck_id: 1},
        {diner_id: 1, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/iMkB-4jATJ9DpvA7FkHK_Q/o.jpg', truck_id: 1},
        {diner_id: 1, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/iCcjF20Qw-U2b96u5wiNHA/o.jpg', truck_id: 2},
        {diner_id: 2, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/EXH3tBHzDpjCmER9ldAsEA/o.jpg', truck_id: 2},
        {diner_id: 3, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/LI7boxuaEOn0Gpa2BWGvZA/o.jpg', truck_id: 2},
        {diner_id: 3, image: 'https://s3-media0.fl.yelpcdn.com/bphoto/23tDXWrd2F-vcT7QHu6J6w/o.jpg', truck_id: 2},
        {diner_id: 2, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/70778026_747697909016107_9083933651552436224_o.jpg?_nc_cat=101&_nc_sid=2d5d41&_nc_eui2=AeGKTb4_F1yzZmqkhg2xz0PtDjuaLytrGoQOO5ovK2sahIqsdtdTLyZJ9bGtGsqFYPg&_nc_ohc=TW5CNaMUXDgAX9vxVhf&_nc_ht=scontent.fsdu12-1.fna&oh=bdbd6332c863cfdaf0f996cecd7e9999&oe=5ED89A0E', truck_id: 3},
        {diner_id: 3, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/69207810_731865420599356_1352936297630531584_o.jpg?_nc_cat=104&_nc_sid=2d5d41&_nc_eui2=AeF43MQ4qLWFkS6-OIQNBMeEesSKo2XXzJN6xIqjZdfMk1TpVkGDkfFM0lJjFeRGY-Q&_nc_ohc=O6_me7KnCpcAX_n4-ha&_nc_ht=scontent.fsdu12-1.fna&oh=ae35c861201c9b5a43047f9689257b44&oe=5ED7C872', truck_id: 3},
        {diner_id: 3, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/56457707_645700015882564_1075460034256699392_o.jpg?_nc_cat=110&_nc_sid=2d5d41&_nc_eui2=AeEo5qN6qUBca_boh_hMmeatU95qVIT680tT3mpUhPrzSwcRmPA24l-RYL-BmKJyUAw&_nc_ohc=1M5SR7LtkxYAX9lZLFH&_nc_ht=scontent.fsdu12-1.fna&oh=2ab3c41394e2004a4897408628003f37&oe=5ED950E2', truck_id: 3},
        {diner_id: 2, image: 'https://scontent.fsdu12-1.fna.fbcdn.net/v/t1.0-9/55849229_645170879268811_2041917758500765696_o.jpg?_nc_cat=105&_nc_sid=2d5d41&_nc_eui2=AeHkILbkY3lTxcJuXcU6xPmggwKg737iLM2DAqDvfuIsze4i4WRpwnyEZl6mED8RGOQ&_nc_ohc=e_AYFXn8fOEAX8fYt4B&_nc_ht=scontent.fsdu12-1.fna&oh=2bdbc45819c6233a474b6d2920ef928e&oe=5ED810B1', truck_id: 3}
      ]);
    });
};
