/* Tutor says that is a factory function, but I think this is currying */
module.exports = (milliseconds = 1) => (req, res, next) => {
  console.log('Middleware function will be executed');
  setTimeout(() => {
    console.log(`Delay middleware function ran after ${milliseconds} milliseconds`);
    next()
  }, milliseconds)
}