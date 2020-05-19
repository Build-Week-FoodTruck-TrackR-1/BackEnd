const db = require('../data/dbConfig');

module.exports = {
    addOrder,
    findOrderById
}

function addOrder(order) {
    return db('orders')
        .insert(order, 'id')
        .then(ids => {
            const [id] = ids;
            return findOrderById(id);
        })
}

function findOrderById(id) {
    return db('orders')
        .select('*')
        .where({ id })
        .first()
}

function addToOrderDetails(entry) {
    return db('order_details')
        .insert(entry, 'id')
        .then(() => {
            return db('order_details as od')
                .select('od.item', 'od.quantity')
                .join('orders as ord', 'ord.id', 'od.order_id')
                .where({'od.order_id': entry.orderId})
        })
}