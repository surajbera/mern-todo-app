const express = require('express')
const router = express.Router()

/* CRUD */
router.post('/register', (req, res) => {
  console.log('POST register route called', req.body);
  res.send()
})

router.post('/login', (req, res) => {
  res.send()
})

module.exports = router