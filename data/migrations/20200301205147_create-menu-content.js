
exports.up = function(knex) {
  return knex.schema
    // menu items table
    .createTable('menu_items', tbl => {
        tbl.increments()

        tbl
            .string('name', 255)
            .notNullable()
        
        tbl.string('description', 500)

        tbl
            .decimal('price', 2, 2)
            .notNullable()

        tbl
            .string('image', 500)

        tbl
            .integer('truck_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('trucks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })

    // menu items ratings table
    .createTable('item_ratings', tbl => {
        tbl.increments()

        tbl
            .integer('item_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('menu_items')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })

    // menu items photo table 
    .createTable('item_photos', tbl => {
        tbl.increments()

        tbl
            .integer('item_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('menu_items')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('item_photos')
    .dropTableIfExists('item_ratings')
    .dropTableIfExists('menu_items')
};
