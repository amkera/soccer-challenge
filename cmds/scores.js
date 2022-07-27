const { calculate } = require("../src/calculateScores")

module.exports = (args) => {
  // const subCmd = args._[0] === "scores" ? args._[1] : args._[0]
  calculate()
}
