const express = require('express')
const router = express.Router()

/* CRUD */
router.post('/home', (req, res) => {
  res.send('Some response')
})

router.get('/home', (req, res) => {
  res.send('Some response')
})

router.put('/home', (req, res) => {
  res.send('Some response')
})

router.delete('/home', (req, res) => {
  res.send('Some response')
})

module.exports = router