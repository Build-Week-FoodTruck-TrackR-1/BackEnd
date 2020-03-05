// endpoints for: /api/accounts

const express = require('express');
const router = express.Router();

const operators = require('../operators/operators-model');
const diners = require('../diners/diners-model');

// how to get accounts for all operators
router.get('/operators', (req, res) => {
    operators.findAllOperators()
        .then(all => {
            res.status(200).json(all)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'could not retrieve operator accounts' });
        })
})

// how to get accounts for all diners
router.get('/diners', (req, res) => {
    diners.findAllDiners()
    .then(all => {
        res.status(200).json(all)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'could not retrieve diner accounts' });
    })
})

module.exports = router;