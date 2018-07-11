
const mongoose = require('mongoose')
const storesSchema = require('../db/schemas/storesSchema')

const Stores = mongoose.model('Stores', storesSchema)

module.exports = Stores