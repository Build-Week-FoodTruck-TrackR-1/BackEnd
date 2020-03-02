const express = require('express');
const router = express.Router();

const operators = require('../auth/operators-model');

router.post('/addTruck', (req, res) => {
    let newTruck = req.body;

    operators.addTruck(newTruck)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to add truck' });
        }) 
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    operators.findOperatorById(id)
        .then(operator => {
            console.log(operator)
            if (operator) {
                const updatedOperator = {
                    ...operator, 
                    trucks: operators.getTrucksByOperator(id)
                };
                res.status(200).json(updatedOperator);
            } else {
                res.status(404).json({ error: 'Could not find an operator with the specified id' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve operator' });
        })
})

router.get('/:id/trucks', (req, res) => {
    const { id } = req.params;

    operators.getTrucksByOperator(id)
        .then(trucks => {
            if(trucks) {
                res.status(200).json(trucks);
            } else {
                res.status(404).json({ error: 'Could not find an operator with the specified id' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve operator' });
        })
})

module.exports = router;