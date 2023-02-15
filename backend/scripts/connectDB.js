const mongoose = require('mongoose')
const DB_URL = process.env.DATABASE_URL

/* Exporting a named function */
module.exports = async function connectDB() {
  try {
    await mongoose.connect(DB_URL)
    console.log('Database Connected'.info.underline);
  } catch (e) {
    console.error(e)
    process.exit()
  }
}
