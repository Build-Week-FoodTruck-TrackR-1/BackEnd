
exports.up = function(knex) {
    // trucks table
    return knex.schema.createTable('trucks', tbl => {
        tbl.increments()

        tbl
            .string('name', 255)
            .notNullable()

        tbl.string('image', 500)

        tbl
            .integer('operator_id')
            .notNullable()
            .unsigned()
            .references('id')
            .inTable('operators')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        tbl
            .string('cuisine_type', 255)
            .notNullable()

        tbl.string('physical_address', 255)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trucks')
};
