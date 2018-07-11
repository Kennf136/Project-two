const express = require('express')
const router = express.Router({ mergeParams: true })
const Stores = require('../models/Stores')
const Employees = require('../models/employees')
const Employers = require('../models/Employer')



// NEW Route
router.get('/new', (req, res) => {
  res.render('stores/newstr',
    { Eid: req.params.Eid })
})

router.post('/', (req, res) => {

 
  const newstore = req.body

  Employers.findById(req.params.Eid)
    .then((employer) => {

     
      employer.Stores.push(newstore)

      return employer.save()
    })
    .then(() => {

     
      res.redirect(`/employers/${req.params.Eid}`)
    })
})

// SHOW Route

router.get('/:id', (req, res) => {
  const Sid = req.params.id
  Employers
    .findById(req.params.Eid)
    .then((employers) => {
      console.log(employers)
      res.render('stores/showstr', {
        Sid,
        employers,

      })
    })
})

// EDIT Route
router.get('/:id/editstr', (req, res) => {
  
  Employers.findById(req.params.Eid)
    .then((employer) => {
      const Sid = employer.Stores.id(req.params.id)
      res.render('stores/editstr', { Sid:sid,  Employers:Employers  })
    })
})


// UPDATE Route

router.patch('/:id', (req, res) => {
  Employers.findById(req.params.employerId)
  .then((employer)=>{
  const store = company.req.params.id(req.params.id)
  store.storeName = req.body.storeName
    store.location = req.body.location
    soda.hoursOfOpp = req.body.hoursOfOpp
    soda.inventory = req.body.inventory

    res.redirect(`${employerId}`)
  })
})




router.patch('/:id', (req, res) => {
  Company.findById(req.params.companyId).then((company) => {

    // We don't have a nice method like findByIdAndUpdate here
    // so instead we need to manually change the sodas values
    const soda = company.sodas.id(req.params.id)
    soda.name = req.body.name
    soda.price = req.body.price
    soda.packaging = req.body.packaging
    soda.quantitySold = req.body.quantitySold
     // Then Save the company
     return company.save()
    }).then((updatedCompany) => {
      res.redirect(`/companies/${updatedCompany._id}/sodas/${req.params.id}`)
    })
  })

  



    // DELETE Route
router.delete('stores/:id', (req, res) => {

})

module.exports = router;