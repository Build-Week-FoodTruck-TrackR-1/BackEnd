const db = require('../data/dbConfig');

module.exports = {
    addTruck,
    editTruck,
    deleteTruck,
    getAllTrucks,
    findTruckById,
    getTrucksByOperator
}

function addTruck(truck) {
    return db('trucks')
        .insert(truck, 'id')
        .then(ids => {
            const [id] = ids;
            return findTruckById(id);
        })
}

function editTruck(changes, id) {
    return db('trucks')
        .where({ id })
        .update(changes)
}

function deleteTruck(id) {
    return db('trucks')
        .where({ id })
        .del()
}

function findTruckById(id) {
    return db('trucks')
    .select('id', 'name', 'image', 'operator_id', 'cuisine_type')
    .where({ id })
    .first()
}

function getTrucksByOperator(id) {
    return db('trucks')
    .select('trucks.id', 'trucks.name', 'trucks.image', 'trucks.cuisine_type')
    .join('operators', 'operators.id', 'trucks.operator_id')
    .where('operators.id', id)
}

function getAllTrucks() {
    return db('trucks as t')
        .select('t.name', 't.image', 't.cuisine_type')
}