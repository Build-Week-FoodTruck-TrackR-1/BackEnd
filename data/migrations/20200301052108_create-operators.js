
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
            .string('email', 255)
            .notNullable()
            .unique()

        tbl
            .string('password', 255)
            .notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('operators')
};
