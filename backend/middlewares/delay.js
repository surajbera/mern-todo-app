/* Tutor says that is a factory function, but I think this is currying */
module.exports = (milliseconds = 1) => (req, res, next) => {
  setTimeout(() => {
    next()
  }, milliseconds)
}