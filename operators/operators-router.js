const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const operators = require('./operators-model');
const trucks = require('../trucks/trucks-model');
const menu = require('../menu-items/menu-items-model');

// how operators get account info 
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    operators.findOperatorById(id)
        .then(operator => {
            console.log(operator)
            if (operator) {
                const updatedOperator = {
                    ...operator, 
                    trucks: []
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

// how operators edit account
router.put('/:id', (req, res) => {
    const { id } = req.params;
    let updatedOp = req.body;
    updatedOp.id = id;
    const hash = bcrypt.hashSync(updatedOp.password, 8);
    updatedOp.password = hash;

    operators.editOperator(updatedOp, id)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to update account' });
        })
})

// how operators delete account
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    operators.deleteOperator(id)
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to delete account' });
        })
})

// how operators add new truck
router.post('/:id/trucks', (req, res) => {
    const { id } = req.params;
    let newTruck = req.body;
    newTruck.operator_id = id;

    trucks.addTruck(newTruck)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to add truck' });
        }) 
})

// how operators get truck by their operator id
router.get('/:operatorId/trucks', (req, res) => {
    const { operatorId } = req.params;

    trucks.getTrucksByOperator(operatorId)
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


// how operators edit truck
router.put('/:operatorId/truck/:truckId', (req, res) => {
    console.log('this is running');
    const { operatorId, truckId } = req.params;
    let updatedTruck = req.body;
    updatedTruck.operator_id = operatorId;
    updatedTruck.id = truckId;

    trucks.editTruck(updatedTruck, truckId)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to update truck' });
        })
})

// how operators delete truck
router.delete('/:operatorId/truck/:truckId', (req, res) => {
    const { operatorId, truckId } = req.params;

    trucks.deleteTruck(truckId)
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to delete truck' });
        })
})

// how operators add menu item
router.post('/:operatorId/truck/:truckId/items', (req, res) => {
    const { operatorId, truckId } = req.params;
    let newItem = req.body;
    newItem.truck_id = truckId;

    menu.addMenuItem(newItem)
        .then(added => {
            res.status(201).json(added);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to add item to menu' });
        })
})

// how operators edit menu item
router.put('/:operatorId/truck/:truckId/item/:itemId', (req, res) => {
    const { operatorId, truckId, itemId } = req.params;
    let updatedItem = req.body;
    updatedItem.truck_id = truckId;
    updatedItem.id = itemId;

    menu.editMenuItem(updatedItem, itemId)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to update item' });
        })
})

// how operators delete menu item
router.delete('/:operatorId/truck/:truckId/deleteItem/:itemId', (req, res) => {
    const { operatorId, truckId, itemId } = req.params;

    menu.deleteMenuItem(itemId)
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to remove item from menu' });
        })
})

module.exports = router;