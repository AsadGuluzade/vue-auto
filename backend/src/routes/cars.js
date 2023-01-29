const express = require('express')
const Car = require('../models/car')

const router = express.Router()

module.exports = router

router.get('/', async (req, res) => {
  const query = {}
  res.send(await Car.find(query).catch(error => console.log('Cars not found, error: ', error)))
})

router.get('/initialize', async (req, res) => {
  await Car.create({
    make: 'Toyota',
    model: 'Prius',
    year: 2009,
    fuel: 'petrol',
    type: 'sedan',
    price: 5000,
    transmission: 'automatic',
  })
  res.sendStatus(200)
})
