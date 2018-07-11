const Schema = require('mongoose').Schema


const employeesSchema = new Schema({
  name: String,
  shift: String,
  tottal: Number,
  job:String,
  days:Date
})

module.exports = employeesSchema