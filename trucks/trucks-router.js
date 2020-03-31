// endpoints for: /api/trucks

const express = require('express');
const router = express.Router();

const trucks = require('./trucks-model');
const menu = require('../menu-items/menu-items-model');

// how diner gets truck menu
router.get('/:id/menu', (req, res) => {
    const { id } = req.params;

    menu.getMenuByTruck(id)
        .then(items => {
            if(items) {
                res.status(200).json(items);
            } else {
                res.status(404).json({ errorMessage: 'Could not find a truck with the specified id' })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve menu' });
        })
})

// how diner gets listing of trucks
router.get('/', (req, res) => {
    trucks.getAllTrucks()
        .then(trucks => {
            if(trucks) {
                res.status(200).json(trucks);
            } else {
                res.status(404).json({ error: 'Sorry, there are no trucks available at this time' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve trucks' });
        })
})

// how diner leaves review of truck
router.post('/:truckId/reviews', (req, res) => {
    const { truckId } = req.params;
    let newReview = req.body;
    newReview.truck_id = truckId;

    trucks.addTruckReview(newReview)
        .then(review => {
            res.status(201).json(review);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to add review' });
        })
})

// how diner gets listing of reviews for truck
router.get('/:truckId/reviews', (req, res) => {
    const { truckId } = req.params;

    trucks.getReviewsByTruck(truckId)
        .then(reviews => {
            res.status(200).json(reviews);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'An error occurred while loading reviews' });
        })
})

// how to get truck by id (diner or operator)
router.get('/:truckId', (req, res) => {
    const { truckId } = req.params;

    let reviewArr;

    let picsArr;

    let menuArr;

    trucks.getReviewsByTruck(truckId)
        .then(r => {
            reviewArr = r;
        })

    trucks.getPicsByTruck(truckId)
        .then(p => {
            picsArr = p;
        })

    menu.getMenuByTruck(truckId)
        .then(m => {
            menuArr = m;
        })

    
    trucks.findTruckById(truckId)
        .then(truck => {
            if (truck) {
                const updatedTruck = {
                    ...truck,
                    reviews: reviewArr,
                    truck_images: picsArr,
                    menu: menuArr
                };

                // lines 94-101 for calculating average of all ratings for truck
                let total = 0;
                let length = updatedTruck.reviews.length;
                updatedTruck.reviews.forEach(({star_rating}) => total += star_rating);

                const truckWithAvgRating = {
                    ...updatedTruck,
                    avg_rating: (total / length).toFixed(1)
                }

                res.status(200).json(truckWithAvgRating);
            } else {
                res.status(404).json({ error: 'Could not find truck with the specified id' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'An error occurred while loading truck. Please try again' });
        })
})

// how diners get trucks by cuisine_type
router.get('/type/:cuisine', (req, res) => {
    const { cuisine } = req.params;

    trucks.findTruckByCuisine(cuisine)
        .then(trucks => {
            res.status(200).json(trucks);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ errorMessage: 'unable to find specified tucks' });
        })
})

// how to get pics by truck
router.get('/:truckId/images', (req, res) => {
    const { truckId } = req.params;

    trucks.getPicsByTruck(truckId)
        .then(pics => {
            res.status(200).json(pics);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ errorMessage: 'unable to retrieve images' });
        })
})

module.exports = router;