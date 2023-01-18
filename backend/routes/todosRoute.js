const express = require('express')
const router = express.Router()

/* CRUD */
router.post('/home', (req, res) => {
  res.status(201).send('Some Response')
})

router.get('/home', (req, res) => {
  res.send('Some Response')
})

router.put('/home', (req, res) => {
  res.send('Some Response')
})

router.delete('/home', (req, res) => {
  res.send('Some Response')
})

module.exports = router