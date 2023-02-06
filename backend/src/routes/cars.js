const express = require('express')
const Car = require('../models/car')

const router = express.Router()

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
    make: 'Toyota',
    model: 'Land cruiser',
    year: 2015,
    fuel: 'diesel',
    type: 'SUV',
    price: 48000,
    transmission: 'automatic',
  })
  await Car.create({
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    fuel: 'electric',
    type: 'sedan',
    price: 52000,
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
    make: 'Chevrolet',
    model: 'Aveo',
    year: 2009,
    fuel: 'diesel',
    type: 'sedan',
    price: 6500,
    transmission: 'automatic',
  })
  await Car.create({
    make: 'Chevrolet',
    model: 'Bolt EV',
    year: 2023,
    fuel: 'electric',
    type: 'sedan',
    price: 58000,
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
    make: 'Mercedes-Benz',
    model: 'E-Klasse',
    year: 2012,
    fuel: 'diesel',
    type: 'sedan',
    price: 86000,
    transmission: 'manuel',
  })
  await Car.create({
    make: 'Mercedes-Benz',
    model: 'G-Klasse',
    year: 2021,
    fuel: 'electric',
    type: 'SUV',
    price: 98000,
    transmission: 'automatic',
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
    make: 'Honda',
    model: 'C-RV',
    year: 2017,
    fuel: 'petrol',
    type: 'SUV',
    price: 15000,
    transmission: 'manuel',
  })
  await Car.create({
    make: 'Honda',
    model: 'C-RV',
    year: 2020,
    fuel: 'electric',
    type: 'SUV',
    price: 15000,
    transmission: 'manuel',
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
    make: 'BMW',
    model: 'X7',
    year: 2020,
    fuel: 'petrol',
    type: 'SUV',
    price: 72000,
    transmission: 'automatic',
  })
  await Car.create({
    make: 'BMW',
    model: 'X6',
    year: 2018,
    fuel: 'diesel',
    type: 'SUV',
    price: 72000,
    transmission: 'automatic',
  })
  res.sendStatus(200)
})
router.get('/filter', async (req, res) => {
  const query = []
  const makeParam = req.query.make
  if (makeParam) {
    query.push({
      make: makeParam,
    })
  }
  const fuelParam = req.query.fuel
  if (fuelParam) {
    query.push({
      fuel: fuelParam,
    })
  }

  res.send(
    await Car.find({
      $and: query,
    }).catch(error => console.log('Cars not found, error: ', error))
  )
})

module.exports = router
