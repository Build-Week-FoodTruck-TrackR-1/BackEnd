const express = require('express');
const router = express.Router();

const operators = require('../operators/operators-model');
const diners = require('../diners/diners-model');

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