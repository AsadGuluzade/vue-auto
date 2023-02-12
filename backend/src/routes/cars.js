const express = require('express')
const Car = require('../models/car')

const router = express.Router()

router.get('/', async (req, res) => {
  const query = {}
  res.send(await Car.find(query).catch(error => console.log('Cars not found, error: ', error)))
})

router.get('/initialize', async (req, res) => {
  await Car.create({
    make: 'Honda',
    model: 'C-RV',
    year: 2017,
    fuel: 'petrol',
    type: 'SUV',
    price: 15000,
    transmission: 'manuel',
    image: 'https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2017HOS020013/2017HOS02001301.jpg',
  })
  await Car.create({
    make: 'Honda',
    model: 'C-RV',
    year: 2020,
    fuel: 'electric',
    type: 'SUV',
    price: 15000,
    transmission: 'manuel',
    image:
      'https://www.cars.com/i/large/in/v2/stock_photos/5690470d-bc11-4bcf-8dd6-95fbb3d2525a/09b87e72-5f80-4e71-a7d6-84718284f154.png',
  })
  await Car.create({
    make: 'BMW',
    model: 'X5',
    year: 2020,
    fuel: 'electric',
    type: 'SUV',
    price: 72000,
    transmission: 'automatic',
    image: 'https://media.ed.edmunds-media.com/bmw/x5/2020/oem/2020_bmw_x5_4dr-suv_m50i_fq_oem_1_1600.jpg',
  })
  await Car.create({
    make: 'BMW',
    model: 'X7',
    year: 2020,
    fuel: 'petrol',
    type: 'SUV',
    price: 72000,
    transmission: 'automatic',
    image:
      'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/8bdecb00-c1ec-4334-9436-0a26b20d35a0/d909438c-8634-4a17-a8f7-d59d00a8ebc2.png',
  })
  await Car.create({
    make: 'BMW',
    model: 'X6',
    year: 2018,
    fuel: 'diesel',
    type: 'SUV',
    price: 72000,
    transmission: 'automatic',
    image: 'https://cars.usnews.com/static/images/Auto/izmo/i58029937/2018_bmw_x6_angularfront.jpg',
  })
  await Car.create({
    make: 'Toyota',
    model: 'Prius',
    year: 2009,
    fuel: 'petrol',
    type: 'sedan',
    price: 5000,
    transmission: 'automatic',
    image:
      'https://images.hgmsites.net/lrg/2008-toyota-prius-5dr-hb-base-natl-angular-front-exterior-view_100266418_l.jpg',
  })
  await Car.create({
    make: 'Toyota',
    model: 'Land cruiser',
    year: 2015,
    fuel: 'diesel',
    type: 'SUV',
    price: 48000,
    transmission: 'automatic',
    image: 'https://images.dealer.com/evox/perspectives/9990/png/9990_31.png',
  })
  await Car.create({
    make: 'Toyota',
    model: 'Camry',
    year: 2021,
    fuel: 'electric',
    type: 'sedan',
    price: 52000,
    transmission: 'automatic',
    image:
      'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/9eb880fa-f0d3-4471-8c23-547b5d1fb3a9/3fba41df-5999-4ad5-96dc-459b3f4b78ee.png',
  })

  await Car.create({
    make: 'Chevrolet',
    model: 'Cruze',
    year: 2012,
    fuel: 'petrol',
    type: 'sedan',
    price: 8200,
    transmission: 'automatic',
    image: 'https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2012CHE022a/2012CHE022a01.jpg',
  })
  await Car.create({
    make: 'Chevrolet',
    model: 'Aveo',
    year: 2009,
    fuel: 'diesel',
    type: 'sedan',
    price: 6500,
    transmission: 'automatic',
    image:
      'https://images.hgmsites.net/lrg/2009-chevrolet-aveo-5dr-hb-lt-w-1lt-angular-front-exterior-view_100245756_l.jpg',
  })
  await Car.create({
    make: 'Chevrolet',
    model: 'Bolt EV',
    year: 2023,
    fuel: 'electric',
    type: 'sedan',
    price: 58000,
    transmission: 'automatic',
    image: 'https://www.pellachevy.com/inventoryphotos/12141/1g1fx6s02p4136132/ip/1.jpg',
  })
  await Car.create({
    make: 'Mercedes-Benz',
    model: 'B-Klasse',
    year: 2017,
    fuel: 'petrol',
    type: 'sedan',
    price: 15000,
    transmission: 'manuel',
    image: 'https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2017MBCAD0001/2017MBCAD000101.jpg',
  })
  await Car.create({
    make: 'Mercedes-Benz',
    model: 'E-Klasse',
    year: 2012,
    fuel: 'diesel',
    type: 'sedan',
    price: 86000,
    transmission: 'manuel',
    image:
      'https://images.hgmsites.net/lrg/2017-mercedes-benz-e-class-e-300-luxury-4matic-sedan-angular-front-exterior-view_100607007_l.jpg',
  })
  await Car.create({
    make: 'Mercedes-Benz',
    model: 'G-Klasse',
    year: 2021,
    fuel: 'electric',
    type: 'SUV',
    price: 98000,
    transmission: 'automatic',
    image:
      'https://www.cars.com/i/large/in/v2/stock_photos/a58d8f4e-762c-48cd-9c2b-560c88c3a14b/13d74086-e252-49fc-a931-421d8b4040c9.png',
  })
  await Car.create({
    make: 'Honda',
    model: 'Civic',
    year: 2009,
    fuel: 'diesel',
    type: 'sedan',
    price: 7000,
    transmission: 'automatic',
    image: 'https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2009HON004a_640/2009HON004a_640_01.png',
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
