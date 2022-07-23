const readData = require("./readData")
let fs = require("fs")

/**
 * String manipulation using regex to extract team names into an array
 */

const parseTeamNames = () => {
  const data = readData()
  const noNumbers = data.replace(/ [0-9]/g, "") //Remove space number
  const noNewLines = noNumbers.replace(/\n/g, ",") //Replace newline with comma
  const noLeadingSpaces = noNewLines.replace(/, /g, ",") //Remove leading spaces
  const arr = noLeadingSpaces.split(",")
  const uniqueTeams = [...new Set(arr)]
  return uniqueTeams
}

const countTeams = () => {
  return parseTeamNames().length
} //6

const countGames = () => {
  return readData().split("\n").length
} //12

const calculateMatchDays = () => {
  return countGames() / (countTeams() / 2)
} //4

const startingScores = parseTeamNames().reduce((obj, teamName) => {
  return { ...obj, [teamName]: 0 }
}, {})

/**
 * Transform data into an array of objects for easier manipulation
 */
const transformData = () => {
  const data = readData()
  const arr = data.split("\n")

  const finalArray = []

  arr.map((game) => {
    const teamScores = game.split(",")
    teamScores.map((teamScore) => {
      teamScore = teamScore.replace(/^[ \t]+/, "")
      let team = teamScore.replace(/ [0-9]/g, "")
      let score = parseInt(teamScore.replace(/\D+/g, ""))
      finalArray.push({ [team]: score })
    })
  })
  return finalArray
}

module.exports = function calculateScores() {
  parseTeamNames, countTeams, countGames, calculateMatchDays
}

const calculate = () => {
  let cumulativeScores = startingScores //0s all the way

  const teamScores = transformData()

  let file = fs.createWriteStream(__dirname + "/rawOutput.txt")

  for (let i = 0; i < teamScores.length; i += 6) {
    for (let j = i; j < i + 6; j += 2) {
      if (
        Object.values(teamScores[j])[0] > Object.values(teamScores[j + 1])[0]
      ) {
        cumulativeScores[Object.keys(teamScores[j])[0]] += 3
        cumulativeScores[Object.keys(teamScores[j + 1])[0]] += 0
      } else if (
        Object.values(teamScores[j])[0] === Object.values(teamScores[j + 1])[0]
      ) {
        cumulativeScores[Object.keys(teamScores[j])[0]] += 1
        cumulativeScores[Object.keys(teamScores[j + 1])[0]] += 1
      } else {
        cumulativeScores[Object.keys(teamScores[j])[0]] += 0
        cumulativeScores[Object.keys(teamScores[j + 1])[0]] += 3
      }
    }

    // file.write(JSON.stringify(cumulativeScores))
    getTopValues(cumulativeScores, 3)
  }
  // file.close()
}

calculate()
