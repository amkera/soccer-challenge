const readData = require("./readData")

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

const calculate = () => {
  let teamPoints = startingScores
  const teamScores = transformData().slice(6, 12)

  for (let i = 0; i < teamScores.length; i += 2) {
    if (Object.values(teamScores[i])[0] > Object.values(teamScores[i + 1])[0]) {
      console.log((teamPoints[Object.keys(teamScores[i])[0]] += 3))
      console.log((teamPoints[Object.keys(teamScores[i + 1])[0]] += 0))
    } else if (
      Object.values(teamScores[i])[0] === Object.values(teamScores[i + 1])[0]
    ) {
      //tie: 1 point to each team
      console.log((teamPoints[Object.keys(teamScores[i])[0]] += 1))
      console.log((teamPoints[Object.keys(teamScores[i + 1])[0]] += 1))
    } else {
      console.log((teamPoints[Object.keys(teamScores[i])[0]] += 0))
      console.log((teamPoints[Object.keys(teamScores[i + 1])[0]] += 3))
    }
  }
  return teamPoints
}

calculate()

module.exports = function calculateScores() {
  parseTeamNames, countTeams, countGames, calculateMatchDays
}
