const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const favouriteSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    autopopulate: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
  },
  review: {
    type: String,
  },
})
class Favourite {}

favouriteSchema.loadClass(Favourite)
favouriteSchema.plugin(autopopulate)

module.exports = mongoose.model('Favourite', favouriteSchema)
