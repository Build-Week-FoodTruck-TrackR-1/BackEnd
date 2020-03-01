
exports.up = function(knex) {
  return knex.schema
    // operators table
    .createTable('operators', tbl => {
        tbl.increments()

        tbl
            .string('username', 255)
            .notNullable()
            .unique()

        tbl
            .string('password', 255)
            .notNullable()
    })

    // diners table
    .createTable('diners', tbl => {
        tbl.increments()

        tbl
            .string('username', 255)
            .notNullable()
            .unique()
        
        tbl.string('password', 255)
            .notNullable()

        tbl
            .string('location', 255)
            .notNullable()
    })

    // trucks table
    .createTable('trucks', tbl => {
        tbl.increments()

        tbl
            .string('name', 255)
            .notNullable()

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

        tbl.decimal('customer_rating_avg', 1, 2)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('operators')
    .dropTable('diners')
    .dropTable('trucks')
};
