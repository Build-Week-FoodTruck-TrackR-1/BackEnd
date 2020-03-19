const db = require('../data/dbConfig');

module.exports = {
    addTruck,
    editTruck,
    deleteTruck,
    getAllTrucks,
    findTruckById,
    findTruckByCuisine,
    getTrucksByOperator,
    addTruckReview,
    findReviewById,
    getReviewsByTruck
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
        .then(() => {
            return findTruckById(id);
        })
}

function deleteTruck(id) {
    return db('trucks')
        .where({ id })
        .del()
}

function findTruckById(id) {
    return db('trucks')
    .select('id', 'name', 'image', 'operator_id', 'cuisine_type', 'current_location')
    .where({ id })
    .first()
}

function findTruckByCuisine(type) {
    return db('trucks')
    .select('*')
    .where('cuisine_type', type)
}

function getTrucksByOperator(id) {
    return db('trucks')
    .select('*')
    // .join('operators', 'operators.id', 'trucks.operator_id')
    .where({ operator_id: id })
}

function getAllTrucks() {
    return db('trucks as t')
        .select('*')
}

function addTruckReview(review) {
    return db('truck_reviews')
        .insert(review, 'id')
        .then(ids => {
            const [id] = ids;
            return findReviewById(id);
        })
}

function findReviewById(id) {
    return db('truck_reviews')
    .select('*')
    .where({ id })
    .first()
}

function getReviewsByTruck(truckId) {
    return db('truck_reviews as tr')
        .select('d.username', 'tr.star_rating', 'tr.review')
        .join('diners as d', 'd.id', 'tr.diner_id')
        .where('tr.truck_id', truckId)
}

