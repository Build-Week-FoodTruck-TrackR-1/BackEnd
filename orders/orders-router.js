const express = require('express');
const router = express.Router();

const orders = require('./orders-model');

router.get('/:orderId', (req, res) => {
    const { orderId } = req.params;

    orders.getDetailsByOrderId(orderId)
    .then(order => {
        res.status(201).json(order);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'unable to get order' })
    })
})

module.exports = router;