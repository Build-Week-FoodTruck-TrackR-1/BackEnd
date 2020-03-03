const db = require('../data/dbConfig');

module.exports = {
    addOperator,
    findOperatorBy,
    findOperatorById,
    findAllOperators
    // addTruck,
    // findTruckById,
    // getTrucksByOperator
}

function addOperator(operator) {
    return db('operators')
        .insert(operator, 'id')
        .then(ids => {
            const [id] = ids;
            return findOperatorById(id);
        })
}

function findOperatorBy(filter) {
    return db('operators')
        .where(filter)
}

function findOperatorById(id) {
    return db('operators')
        .select('id', 'username', 'email', 'password')
        .where({ id })
        .first()
}

function findAllOperators() {
    return db('operators as o')
        .select('o.id', 'o.username', 'o.email', 'o.password')
}

// function addTruck(truck) {
//     return db('trucks')
//         .insert(truck, 'id')
//         .then(ids => {
//             const [id] = ids;
//             return findTruckById(id);
//         })
// }

// function findTruckById(id) {
//     return db('trucks')
//     .select('id', 'name', 'image', 'operator_id', 'cuisine_type')
//     .where({ id })
//     .first()
// }

// function getTrucksByOperator(id) {
//     return db('trucks')
//     .select('trucks.id', 'trucks.name', 'trucks.image', 'trucks.cuisine_type')
//     .join('operators', 'operators.id', 'trucks.operator_id')
//     .where('operators.id', id)
// }