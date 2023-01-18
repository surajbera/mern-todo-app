console.clear()

const express = require('express')
const app = express()
require('./scripts/colors')
require('./scripts/dotenv')
const connectDB = require('./scripts/connectDB')
const delay = require('./middlewares/delay')
const getProdDetails = require('./scripts/getProdDetails')
const todosRoute = require('./routes/todosRoute')
const usersRoute = require('./routes/usersRoute')
const [PORT, isInProduction] = getProdDetails(3939)

app.use(delay(isInProduction ? 0 : 1000))
app.use(express.json())
app.use('/api/todos', todosRoute)
app.use('/api/users', usersRoute)

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.success);
  connectDB()
})