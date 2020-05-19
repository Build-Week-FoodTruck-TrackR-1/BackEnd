
exports.up = function(knex) {
  return knex.schema
    .createTable('orders', tbl => {
        tbl.increments()

        tbl
            .date('date')
            .notNullable()
        
        tbl
            .time('time')
            .notNullable()

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
            .decimal('subtotal', 2, 2)
            .notNullable()

        tbl
            .decimal('tip', 2, 2)
            .notNullable()

        tbl
            .decimal('total', 2, 2)
            .notNullable()
    })

    .createTable('order_details', tbl => {
        tbl
            .integer('order_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('orders')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .integer('item_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('menu_items')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

        tbl
            .string('item', 100)
            .notNullable()

        tbl
            .integer('quantity')
            .notNullable()

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
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('orders')
    .dropTableIfExists('order_details')
};
