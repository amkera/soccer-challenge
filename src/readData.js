let fs = require("fs")

module.exports = function readData() {
  try {
    const data = fs.readFileSync(__dirname + "/input.txt").toString("utf-8")
    return data
  } catch (error) {
    console.error(error)
  }
}
