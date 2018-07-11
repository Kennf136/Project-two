const Schema = require('mongoose').Schema
const employees = require('./employees')

const storesSchema = new Schema({
 storeName:String,
 Employees:[employees],
 location:String,
 hoursOfOpp:String,
 revenue:Number,
 expenses:Number,
 profit:Number,
 inventory:String
})

module.exports = storesSchema