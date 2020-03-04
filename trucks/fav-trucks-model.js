const db = require('../data/dbConfig');

module.exports = {
    addToFavs,
    findFavById
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