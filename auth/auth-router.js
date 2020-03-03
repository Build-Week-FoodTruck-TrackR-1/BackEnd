const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const operators = require('./operators-model');
const diners = require('./diners-model');

// registration for operators
router.post('/register/operators', (req, res) => {
    let operator = req.body;

    const hash = bcrypt.hashSync(operator.password, 8);
    operator.password = hash;

    operators.addOperator(operator)
        .then(added => {
            // req.session.loggedIn = true;
            res.status(201).json(added);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to register operator' });
          }) 
})

// registration for diners
router.post('/register/diners', (req, res) => {
    let diner = req.body;

    const hash = bcrypt.hashSync(diner.password, 8);
    diner.password = hash;

    diners.addDiner(diner)
        .then(added => {
            // req.session.loggedIn = true;
            res.status(201).json(added);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to register diner' });
        })
})      

// login for operators
router.post('/login/operators', (req, res) => {
    let { username, password } = req.body;
    console.log(req.body);

    operators.findOperatorBy({ username })
        .first()
        .then(operator => {
            console.log('operator: ' + operator);
            if(operator && bcrypt.compareSync(password, operator.password)) {
                const token = generateToken(operator);
                // req.session.loggedIn = true;
                // req.session.username = operator.username;

                res.status(200).json({
                    message: `Welcome ${operator.username}`,
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

//login for diners
router.post('/login/diners', (req, res) => {
    let { username, password } = req.body;

    diners.findDinerBy({ username })
        .first()
        .then(diner => {
            if(diner && bcrypt.compareSync(password, diner.password)) {
                const token = generateToken(diner);
                // req.session.loggedIn = true;
                // req.session.username = diner.username;

                res.status(200).json({
                    message: `Welcome ${diner.username}`,
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
        expiresIn: '30m'
    }

    return jwt.sign(payload, secret, options);
}

module.exports = router;