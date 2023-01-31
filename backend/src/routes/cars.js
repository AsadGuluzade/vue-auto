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

  await Car.create({
    make: 'Chevrolet',
    model: 'Cruze',
    year: 2012,
    fuel: 'petrol',
    type: 'sedan',
    price: 8000,
    transmission: 'automatic',
  })
  await Car.create({
    make: 'Mercedes-Benz',
    model: 'B-Klasse',
    year: 2017,
    fuel: 'petrol',
    type: 'sedan',
    price: 15000,
    transmission: 'manuel',
  })
  await Car.create({
    make: 'Honda',
    model: 'Civic',
    year: 2009,
    fuel: 'diesel',
    type: 'sedan',
    price: 7000,
    transmission: 'automatic',
  })

  await Car.create({
    make: 'BMW',
    model: 'X5',
    year: 2020,
    fuel: 'electric',
    type: 'SUV',
    price: 72000,
    transmission: 'automatic',
  })

  await Car.create({
    make: 'Mitsubishi',
    model: 'Outlander',
    year: 2015,
    fuel: 'diesel',
    type: 'SUV',
    price: 22000,
    transmission: 'automatic',
  })
})
