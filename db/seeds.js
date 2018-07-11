const mongoose = require('mongoose')
const employees = require('../models/Employees')
const employer = require('../models/Employer')
const Stores = require('../models/Stores')

// Connect to Database
mongoose.connect('mongodb://localhost/CoolCheets')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })
  const employee1 = new employees({
    name: 'bobby',
    shift: 'first',
    tottal: 30,
    job:'cook',
    days:'monday-wensday'
  })

  const employee2 = new employees({
    name: 'Kentrell',
    shift: 'second',
    tottal: 70,
    job:'cook',
    days:'sunday-sunday'
  })

  const employee3 = new employees({
      name:'suezie carmakile',
      shift:'third',
      tottal:105,
      job:'mannager'
  })

  const store1= new Stores({
      storeName:'popeyes',
      emoloyees:[employee1,employee2,employee3],
      location:'midtown, Atlanta',
      hoursOfOpp:'10am-1:30am',
      revenue:50000,
      expenses:14000,
      profit:36000,
      inventory:[]
  })

  // create new test Homework data
  const employer1 = new employer({
  Name:'Shaq',
  img:'http://the8percent.com/wp-content/uploads/2016/03/Shaq.jpg', 
  Stores:['store1']
  })

  const employers = [ employer1 ]


// Remove old Homework Data
employer.remove()
  .then(() => {
    const employee1 = new employees({
      name: 'bobby',
      shift: 'first',
      tottal: 30,
      job:'cook',
      days:'monday-wensday'
    })

    const employee2 = new employees({
      name: 'Kentrell',
      shift: 'second',
      tottal: 70,
      job:'cook',
      days:'sunday-sunday'
    })

    const employee3 = new employees({
        name:'suezie carmakile',
        shift:'third',
        tottal:105,
        job:'mannager'
    })

    const store1= new Stores({
        storeName:'popeyes',
        emoloyees:[employee1,employee2,employee3],
        location:'midtown, Atlanta',
        hoursOfOpp:'10am-1:30am',
        revenue:50000,
        expenses:14000,
        profit:36000,
        inventory:[ ]
    })

    // create new test Homework data
    const employer1 = new employer({
    Name:'Shaq',
    img:'http://the8percent.com/wp-content/uploads/2016/03/Shaq.jpg', 
    Stores:[store1]
    })

    const employers = [ employer1 ]

    // save test data
    return employer.insertMany(employers)
  })
  .then(() => {

    // close the database
    mongoose.connection.close()
  })