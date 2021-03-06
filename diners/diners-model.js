const db = require('../data/dbConfig');

module.exports = {
    addDiner,
    findDinerBy,
    findDinerById,
    findAllDiners,
    editDiner,
    deleteDiner,
    // took this one out bc this func can be used to edit more than just location
    // editDinerLocation,
    getDinerCard,
    addDinerCard,
    editDinerCard,
    deleteDinerCard,
    findCardBy
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
        .select('*')
        .where({ id })
        .first()
}

function findAllDiners() {
    return db('diners as d')
        .select('d.id', 'd.name', 'd.username', 'd.email', 'd.password', 'd.location', 'd.stripe_id')
}

// function editDiner(changes, id) {
//     return db('diners')
//         .where({ id })
//         .update(changes)
//         .then(id => {
//             return findDinerById(id)
//         })
// }

function deleteDiner(id) {
    return db('diners')
        .where({ id })
        .del()
}

function editDiner(changes, id) {
    return db('diners')
        .where({ id })
        .update(changes)
        .then(() => {
            return findDinerById(id);
        })
}

function getDinerCard(id) {
    return db('diner_cards as dc')
        .select('name', 'num', 'exp_date', 'cvc', 'zip')
        .where({ diner_id: id })
}

function addDinerCard(card) {
    return db('diner_cards')
        .insert(card, 'id')
        // .then(ids => {
        //     const [id] = ids;
        //     return getDinerCard(id)
        // })
}

function editDinerCard(changes, id) {
    return db('diner_cards')
        .where({ diner_id: id })
        .update(changes)
        .then(() => {
            return findDinerById(id);
        })
}

function deleteDinerCard(id) {
    return db('diner_cards')
        .where({ diner_id: id })
        .del()
}

function findCardBy(filter) {
    return db('diner_cards as dc')
        .select('dc.name', 'dc.num', 'dc.exp_date', 'dc.cvc', 'dc.zip')
        .join('diners as d', 'd.id', 'dc.diner_id')
        .where(filter)
}