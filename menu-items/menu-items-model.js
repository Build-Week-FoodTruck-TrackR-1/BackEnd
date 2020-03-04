const db = require('../data/dbConfig');

module.exports = {
    addMenuItem,
    findMenuItemById,
    getMenuByTruck,
    editMenuItem,
    deleteMenuItem
}

function addMenuItem(item) {
    return db('menu_items')
        .insert(item, 'id')
        .then(ids => {
            const [id] = ids;
            return findMenuItemById(id);
        })
}

function findMenuItemById(id) {
    return db('menu_items')
        .select('id', 'name', 'description', 'price', 'truck_id')
        .where({ id })
        .first()
}

function editMenuItem(changes, id) {
    return db('menu_items')
        .where({ id })
        .update(changes)
        .then(id => {
            return findMenuItemById(id);
        })
}

function deleteMenuItem(id) {
    return db('menu_items')
        .where({ id })
        .del()
}

function getMenuByTruck(truckId) {
    return db('menu_items as mi')
        .select('mi.name', 'mi.description', 'mi.price')
        .join('trucks as t', 't.id', 'mi.truck_id')
        .where('t.id', truckId)
}
