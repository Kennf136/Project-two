const express = require('express');
const router = express.Router();
const Employers = require('../models/Employer');

/* GET employer listing. */
// localhost/employer
router.get('/', (req, res, next) => {

  // Find all employers
  Employers
    .find()
    .then((listOfemployers) => {

      // Once you have all employer, then render out index page employers is all
      // pieces of data that match the employer Model
      res.render('employers/index',
        { listOfemployers: listOfemployers })
    })
    .catch((err) => res.send(err))

})

// NEW Route
router.get('/new', (req, res) => {
  res.render('employers/new')
})

// CREATE Route

router.post('/', (req, res) => {
  const newemployer = req.body
  console.log(req.body)
  Employers
    .create(newemployer)
    .then(() => {
      res.redirect('/employers')
    })
    .catch((err) => res.send(err))
})

// SHOW Route
router.get('/:id', (req, res) => {
  Employers
    .findById(req.params.id)
    .then((employers) => {
      res.render('employers/show', { employers })
    })
})

// EDIT Route
router.get('/:id/edit', (req, res) => {
  Employers
  .findById(req.params.id)
    .then((employer) => {
      const store= employer.Stores.id(req.params.id)
      res.render('employers/edit', { employer: employer, store:store })
    })
})

// UPDATE Route

router.put('/:id', (req, res) => {
    Employers.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(() => {
      res.redirect(`/Employers/${req.params.id}`)
    })
  })
  
// DELETE Route
router.delete('/:id', (req, res) => {
  Employers.findByIdAndRemove(req.params.id)
    .then(() => {
      console.log('Successfully Delete ')
      res.redirect('/employers')
    })
})

module.exports = router;