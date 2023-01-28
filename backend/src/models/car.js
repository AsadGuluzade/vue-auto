const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  fuel: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    used: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
})
