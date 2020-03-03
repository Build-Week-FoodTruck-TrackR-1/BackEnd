const express = require('express');
const router = express.Router();

const trucks = require('./trucks-model');
const menu = require('../menu-items/menu-items-model');

// how diner gets truck menu
router.get('/:id/menu', (req, res) => {
    const { id } = req.params;

    menu.getMenuByTruck(id)
        .then(items => {
            if(items) {
                res.status(200).json(items);
            } else {
                res.status(404).json({ errorMessage: 'Could not find a truck with the specified id' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve menu' });
        })
})

// how diner gets listing of trucks
router.get('/', (req, res) => {
    trucks.getAllTrucks()
        .then(trucks => {
            if(trucks) {
                res.status(200).json(trucks);
            } else {
                res.status(404).json({ error: 'Sorry, there are no trucks available at this time' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve trucks' });
        })
})

module.exports = router;