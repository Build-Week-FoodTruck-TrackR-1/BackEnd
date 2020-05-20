// endpoints for: /api/diner

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const diners = require('./diners-model');
const trucks = require('../trucks/trucks-model');
const favorites = require('../trucks/fav-trucks-model');
const orders = require('../orders/orders-model');

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// how diners get account info
router.get('/:id', (req, res) => {
    const { id } = req.params;

    let favsArr;
    let card;

    favorites.findFavsByDiner(id)
        .then(f => {
            favsArr = f;
        })
    
    diners.getDinerCard(id)
        .then(c => {
            card = c;
        })
    

    diners.findDinerById(id)
        .then(diner => {
            if (diner) {
                const updatedDiner = {
                    ...diner,
                    favTrucks: favsArr,
                    cardOnFile: card
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
            res.status(500).json({ errorMessage: 'An error occured while updating account' });
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

// how diners change location
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    let updatedlocation = req.body;

    diners.editDinerLocation(updatedlocation, id)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'An error occurred while updating location. Please try again.' });
        })
})

// how diners get favorite trucks
router.get('/:id/favorites', (req, res) => {
    const { id } = req.params;

    favorites.findFavsByDiner(id)
        .then(trucks => {
            res.status(200).json(trucks);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'An error occurred while retrieving trucks. Please try again.' });
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
            // console.log(`id being generated: ${newFav.id}`)
            res.status(201).json(added);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to add to favorites' });
        })
})

// how diners delete remove from favorite trucks
router.delete('/:dinerId/fav/:truckId', (req, res) => {
    const { dinerId, truckId } = req.params;
    
    favorites.deleteFromFavs(dinerId, truckId)
        .then(deleted => {
            res.status(200).json(deleted);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to delete from favorites' })
        })
})

// how diners add credit/debit card
router.post('/:dinerId/card', (req, res) => {
    const { dinerId } = req.params;

    let { num, name, exp_date, cvc, zip, customer } = req.body;

    diners.addDinerCard({ diner_id: dinerId, num: num, name: name, exp_date: exp_date, cvc: cvc, zip: zip })
        .then(added => {
            res.status(201).json(added);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to add to card' });
        })

    stripe.paymentMethods.create(
        {
            type: 'card',
            card: {
            number: num,
            exp_month: `${exp_date[0]}${exp_date[1]}`,
            exp_year: `20${exp_date[2]}${exp_date[3]}`,
            cvc: cvc,
            },
            billing_details: {
                address: {
                    postal_code: zip
                }
            }
        },
        function(err, paymentMethod) {
            // asynchronously called
            if(err) {
            console.log(`Error:`, err);
            } else {
            console.log(`card details: ${paymentMethod.id}, ${paymentMethod.card}`);
            stripe.setupIntents.create(
                {payment_method_types: ['card'], customer: customer, payment_method: paymentMethod.id},
                function(err, setupIntent) {
                  if(err) {
                    console.log(`Error:`, err);
                  } else {
                    console.log(`client secret: ${setupIntent.client_secret}`);
                    stripe.setupIntents.confirm(
                        `${setupIntent.id}`,
                        {payment_method: paymentMethod.id},
                        function(err, setupIntent) {
                          if(err) {
                              console.log(err);
                          }
                          else {
                              console.log(`setup intent confirmed: ${setupIntent}`);
                          }
                        }
                    );
                  }
                }
            );
            }
        }
    );

    // stripe.setupIntents.confirm(
    //     'seti_123456789',
    //     {payment_method: 'pm_card_visa'},
    //     function(err, setupIntent) {
    //       // asynchronously called
    //     }
    // );
})

// how diners edit credit/debit card
router.patch('/:dinerId/card', (req, res) => {
    const { dinerId } = req.params;

    let updatedCard = req.body;

    diners.editDinerCard(updatedCard, dinerId)
        .then(updated => {
            res.status(200).json(updated);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to update card' });
        })
})

// how diners delete debit/credit card
router.delete('/:dinerId/card', (req, res) => {
    const { dinerId } = req.params;

    diners.deleteDiner(dinerId)
        .then(deleted => {
            res.status(200).json(deleted)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to remove card' });
        })
})

// diner confirms order
// adds new order to orders table
router.post('/:dinerId/confirm-order', (req, res) => {
    const { dinerId } = req.params;
    let order = req.body;
    order.diner_id = dinerId;
    let { stripeId, date, time, truck_id, subtotal, tip, total } = order;

    orders.addOrder({
        date: date,
        time: time,
        diner_id: dinerId,
        truck_id: truck_id,
        subtotal: subtotal,
        tip: tip, 
        total: total
    })
        .then(added => {
            // res.status(201).json(added);
            order.breakdown.map(entry => {
                orders.addToOrderDetails({
                    order_id: added.id,
                    item_id: entry.id,
                    item: entry.item,
                    quantity: entry.count,
                    diner_id: dinerId,
                    truck_id: truck_id
                })
                // .then(added => {
                //     // res.status(201).json(added);
                // })
                // .catch(err => {
                //     console.log(err);
                //     res.status(500).json({ errorMessage: 'unable to confirm order' })
                // })
            })
            stripe.paymentIntents.create(
                {
                  amount: total * 100,
                  currency: 'usd',
                  payment_method_types: ['card'],
                  customer: stripeId
                },
                function(err, paymentIntent) {
                  if(err) {
                      console.log(err)
                  } else {
                      console.log(`status: ${paymentIntent.status}`)
                      res.status(201).json(added);
                  }
                }
              );
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to confirm order' })
        })
})

module.exports = router;