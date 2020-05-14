// endpoints for: /api/stripe

const express = require('express');
const router = express.Router();

const env = require("dotenv").config({ path: "./.env" });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// router.post('/create-customer', (req, res) => {
//     let customer = req.body;

//     stripe.customers.create(customer, function(err, customer) {
//         if (err) {
//             console.log(err);
//         } else if (customer) {
//             console.log(`success: ${customer}`);
//         } else {
//             console.log('Something went wrong');
//         }
//     })
// })

module.exports = router;