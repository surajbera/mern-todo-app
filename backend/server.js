console.clear()

const express = require('express')
const app = express()
require('./scripts/dotenv')
require('./scripts/colors')
const connectDB = require('./scripts/connectDB')
const [PORT] = require('./scripts/getProdDetails')(3939)
const todosRoute = require('./routes/todosRoute')
const usersRoute = require('./routes/usersRoute')

app.use(express.json())
app.use('/api/todos', todosRoute)
app.use('/api/users', usersRoute)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.success);
  connectDB()
})