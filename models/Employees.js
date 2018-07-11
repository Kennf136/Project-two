
const mongoose = require('mongoose')
const employeesSchema = require('../db/schemas/employees')

const Employee = mongoose.model('employee', employeesSchema)

module.exports = Employee