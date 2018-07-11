const Schema = require('mongoose').Schema
const storesSchema = require('./storesSchema')

const employerSchema = new Schema({
    Name: String,
    img: String,
    // embeaded stuff?
    Stores:[storesSchema]
    
})

module.exports = employerSchema