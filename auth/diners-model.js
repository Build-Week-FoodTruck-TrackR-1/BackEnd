const db = require('../data/dbConfig');

module.exports = {
    addDiner,
    findDinerBy,
    findDinerById
}

function addDiner(diner) {
    return db('diners')
        .insert(diner, 'id')
        .then(ids => {
            const [id] = ids;
            return findDinerById(id);
        })
}

function findDinerBy(filter) {
    return db('diners')
        .where(filter)
}

function findDinerById(id) {
    return db('diners')
        .select('id', 'username', 'password', 'location')
        .where({ id })
        .first()
}