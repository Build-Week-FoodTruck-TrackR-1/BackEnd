
exports.up = function(knex) {
  return knex.schema
    // truck ratings table
    .createTable('truck_ratings', tbl => {
      tbl.increments(

      )
      tbl
          .integer('truck_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('trucks')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

      tbl
          .integer('diner_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('diners')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')

      tbl
          .integer('rating')
          .notNullable()
    })

    // diners' favorite trucks table 
    .createTable('fav_trucks', tbl => {
      tbl.increments()

      tbl
        .integer('diner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('diners')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      tbl
        .integer('truck_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('trucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
    })

    .createTable('truck_reviews', tbl => {
      tbl.increments()

      tbl
        .integer('diner_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('diners')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      tbl
        .integer('truck_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('trucks')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      tbl
        .string('review', 500)
        .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('truck_ratings')
    .dropTableIfExists('fav_trucks')
};
