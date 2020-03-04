const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const diners = require('./diners-model');
const trucks = require('../trucks/trucks-model');
const favorites = require('../trucks/fav-trucks-model');

// how diners get account info
router.get('/:id', (req, res) => {
    const { id } = req.params;

    diners.findDinerById(id)
        .then(diner => {
            if (diner) {
                const updatedDiner = {
                    ...diner,
                    favTrucks: []
                };
                res.status(200).json(updatedDiner);
            } else {
                res.status(404).json({ error: 'Unable to find a diner with the specified id' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve diner' });
        })
})

// how diners edit account
router.put('/:id', (req, res) => {
    const { id } = req.params;
    let updatedDiner = req.body;
    updatedDiner.id = id;
    const hash = bcrypt.hashSync(updatedDiner.password, 8);
    updatedDiner.password = hash;

    diners.editDiner(updatedDiner, id)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to delete account' });
        })
})

// how diners delete account
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    diners.deleteDiner(id)
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to delete account' });
        })
})

// how diners add favorite truck
router.post('/:dinerId/fav/:truckId', (req, res) => {
    const { dinerId, truckId } = req.params;
    let newFav = req.body;
    newFav.diner_id = dinerId;
    newFav.truck_id = truckId;

    favorites.addToFavs(newFav)
        .then(added => {
            console.log(`id being generated: ${newFav.id}`)
            res.status(201).json(added);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to add to favorites' });
        })
})

module.exports = router;