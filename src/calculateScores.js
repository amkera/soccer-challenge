const readData = require("./readData")

module.exports = function calculateScores() {
  const data = readData() //why is this undefined
  console.log("Data " + data)
}
