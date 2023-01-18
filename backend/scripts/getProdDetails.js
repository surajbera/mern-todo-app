/* Exporting an anonymous function */
module.exports = function (defaultPort = 3939) {
  const isInProduction = Boolean(process.env.PORT)
  const PORT = process.env.PORT || defaultPort

  return [PORT, isInProduction]
}