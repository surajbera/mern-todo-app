const express = require('express')
const router = express.Router()
const delay = require('../middlewares/delay')

const todos = [
  { id: 1, text: 'some text some text', isComplete: false },
  { id: 2, text: 'some text some text', isComplete: false },
  { id: 3, text: 'some text some text', isComplete: false },
  { id: 4, text: 'some text some text', isComplete: false }
]

/* CRUD */
router.post('/', (req, res) => {
  res.status(201).send('Some Response')
})

router.get('/', (req, res) => {
  res.send('Some Response')
})

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const body = req.body
  const todo = todos.find(t => t.id === id)
  todo.text = body.text

  res.send(todos)
})

router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const todoIdx = todos.findIndex(t => t.id === id)
  todos.splice(todoIdx, 1)

  res.send(todos)
})

module.exports = router