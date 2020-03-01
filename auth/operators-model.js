const db = require('../data/dbConfig');

module.exports = {
    addOperator,
    findOperatorBy,
    findOperatorById
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
        .select('id', 'username', 'password')
        .where({ id })
        .first()
}