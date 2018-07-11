
const mongoose = require('mongoose')
const employerSchema = require('../db/schemas/employerSchema')

const Employer = mongoose.model('employer', employerSchema)

module.exports = Employer