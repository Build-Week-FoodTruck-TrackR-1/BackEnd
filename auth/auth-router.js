// endpoints for: /api/auth

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const operators = require('../operators/operators-model');
const diners = require('../diners/diners-model');
favorites = require('../trucks/fav-trucks-model');

const env = require("dotenv").config({ path: "./.env" });
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// registration for operators
router.post('/register/operators', (req, res) => {
    let operator = req.body;

    const hash = bcrypt.hashSync(operator.password, 8);
    operator.password = hash;

    if (!operator.username || !operator.email || !operator.password) {
        res.status(400).json({ error: 'Please enter username, email and password' })
    } else {
        operators.addOperator(operator)
            .then(added => {
                // req.session.loggedIn = true;
                // const token = generateToken(added);
                res.status(201).json(added);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ errorMessage: 'unable to register operator' });
            })
    }
})

// registration for diners
router.post('/register/diners', (req, res) => {
    let diner = req.body;

    const hash = bcrypt.hashSync(diner.password, 8);
    diner.password = hash;

    if (!diner.name || !diner.username || !diner.email || !diner.password) {
        res.status(400).json({ error: 'Please enter full name, username, email and password'})
    } else {
        diners.addDiner(diner)
            .then(added => {
                // const token = generateToken(added);
                // req.session.loggedIn = true;
                let customer = {
                    id: added.id,
                    name: added.name,
                    email: added.email
                }

                stripe.customers.create(customer, function(err, customer) {
                    if (err) {
                        console.log(err);
                    } else if (customer) {
                        console.log(`success: ${customer}`);
                    } else {
                        console.log('Something went wrong');
                    }
                })
                res.status(201).json(added);
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ errorMessage: 'unable to register diner' });
            })
    }
})      

// login for operators
router.post('/login/operators', (req, res) => {
    let { username, password } = req.body;
    console.log(req.body);

    if (!username || !password) {
        res.status(400).json({ error: 'Please enter username and password' });
    } else {
        operators.findOperatorBy({ username })
            .first()
            .then(operator => {
                console.log('operator: ' + operator);
                if(operator && bcrypt.compareSync(password, operator.password)) {
                    const token = generateToken(operator);

                    res.status(200).json({
                        message: `Welcome ${operator.username}`,
                        account: {
                            id: operator.id,
                            username: operator.username,
                            email: operator.email
                        },
                        token
                    })
                } else {
                    res.status(401).json({ error: 'Invalid credentials' });
                }
            })
            .catch(error => {
                console.log(error);
                res.status(500).json({ errorMessage: 'unable to login' });
            })
    }
})

//login for diners
router.post('/login/diners', (req, res) => {
    let { username, password } = req.body;

    let favsArr;
    let card;

    favorites.findFavsBy({ username })
        .then(f => {
            favsArr = f;
        })

    diners.findCardBy({ username })
        .then(c => {
            card = c;
        })

    diners.findDinerBy({ username })
        .first()
        .then(diner => {
            if(diner && bcrypt.compareSync(password, diner.password)) {
                const token = generateToken(diner);
                // req.session.loggedIn = true;
                // req.session.username = diner.username;

                const updatedDiner = {
                    ...diner,
                    favTrucks: favsArr,
                    cardOnFile: card
                };

                res.status(200).json({
                    message: `Welcome ${diner.username}`,
                    account: {
                        id: updatedDiner.id,
                        username: updatedDiner.username,
                        email: updatedDiner.email,
                        password: updatedDiner.password,
                        location: updatedDiner.location,
                        favTrucks: updatedDiner.favTrucks,
                        cardOnFile: updatedDiner.cardOnFile[0]
                    },
                    token
                })
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to login' });
        })
})

// token generation
function generateToken(user) {
    const payload = {
        username: user.username
    }

    const secret = process.env.JWT_SECRET || 'top secret';

    const options = {
        expiresIn: '24h'
    }

    return jwt.sign(payload, secret, options);
}

module.exports = router;