const db = require('../data/dbConfig');

module.exports = {
    addToFavs,
    findFavById,
    findFavsByDiner,
    findFavsBy
}

function addToFavs(fav) {
    return db('fav_trucks')
        .insert(fav, 'id')
        .then(ids => {
            const [id] = ids;
            return findFavById(id);
        })
}

function findFavById(id) {
    return db('fav_trucks as ft')
    .join('trucks as t', 't.id', 'ft.truck_id')
    .where({ 'ft.id': id  })
    .select('ft.truck_id', 't.name')
    .first()
}

function findFavsByDiner(dinerId) {
    return db('fav_trucks as ft')
        .select('t.name', 't.image', 't.cuisine_type', 't.current_location')
        .join('trucks as t', 't.id', 'ft.truck_id')
        .where({ 'ft.diner_id': dinerId })
}

function findFavsBy(filter) {
    return db('fav_trucks as ft')
        .select('t.name', 't.image', 't.cuisine_type', 't.current_location')
        .join('diners as d', 'd.id', 'ft.diner_id')
        .join('trucks as t', 't.id', 'ft.truck_id')
        .where(filter)
}