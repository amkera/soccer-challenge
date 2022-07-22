const readData = require("./readData")

/**
 * Transform data into an array of objects for easier manipulation
 */
const transformData = () => {
  const data = readData()
  const arr = data.split("\n")

  const finalArray = []

  const test = arr.map((game) => {
    const teamScores = game.split(",")
    teamScores.map((teamScore) => {
      teamScore = teamScore.replace(/^[ \t]+/, "")
      let team = teamScore.replace(/ [0-9]/g, "")
      let score = parseInt(teamScore.replace(/\D+/g, ""))
      finalArray.push({ [team]: score })
    })
  })
  console.log(finalArray)
}

transformData()

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

/**
 * Calculate how many teams are in the league
 */
const countTeams = () => {
  return parseTeamNames().length
}

const countGames = () => {
  return readData().split("\n").length
}

/**
 * From the input, each team plays once per matchday
 */
const calculateMatchDays = () => {
  return countGames() / (countTeams() / 2)
}

const startingScores = parseTeamNames().reduce((obj, teamName) => {
  return { ...obj, [teamName]: 0 }
}, {})

const algorithm = () => {}

module.exports = function calculateScores() {
  parseTeamNames, countTeams, countGames, calculateMatchDays
}
