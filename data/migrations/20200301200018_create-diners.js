
exports.up = function(knex) {
    // diners table
    return knex.schema
        .createTable('diners', tbl => {
            tbl.increments()

            tbl
                .string('name', 255)
                .notNullable()

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

            tbl
                .string('country', 255)
                .notNullable()

            tbl
                .string('language', 255)
                .notNullable()

            tbl
                .string('location', 255)

            tbl
                .string('stripe_id', 255)
                .notNullable()
                .unique()
        })

        .createTable('diner_cards', tbl => {
            tbl
                .integer('diner_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('diners')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')

            tbl
                .string('num', 25)
                .notNullable()

            tbl
                .string('name', 50)
                .notNullable()

            tbl
                .string('exp_date', 4)
                .notNullable()

            tbl
                .string('cvc', 3)
                .notNullable()

            tbl
                .string('zip', 20)
                .notNullable()
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('diner_cards')
        .dropTableIfExists('diners')
};
