
exports.up = function(knex) {
    // diners table
    return knex.schema.createTable('diners', tbl => {
        tbl.increments()

        tbl
            .string('username', 255)
            .notNullable()
            .unique()

        tbl
            .string('email', 255)
            .notNullable()
            .unique()
        
        tbl.string('password', 255)
            .notNullable()

        tbl
            .string('location', 255)
    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('diners')
};
