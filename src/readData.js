let fs = require("fs")

module.exports = function readData() {
  fs.readFile(__dirname + "/input.txt", "utf-8", (err, data) => {
    if (err) {
      throw err
    }
    console.log(data)
    return data
  })
}
