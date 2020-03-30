
exports.up = function(knex) {
  return knex.schema
    .createTable('diner_uploaded_pics', tbl => {
        tbl
            .integer('diner_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('diners')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        
        tbl
            .string('image', 500)
            .notNullable()
        
        tbl
            .integer('truck_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('trucks')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('diner_uploaded_pics')
};
