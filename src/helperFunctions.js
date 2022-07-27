const readData = require("./readData")

/**
 * String manipulation using regex to extract the team names into an array
 */
const parseTeamNames = () => {
  const data = readData()

  //Remove space number
  const noNumbers = data.replace(/ [0-9]/g, "")

  //Replace newline with comma
  const noNewLines = noNumbers.replace(/\n/g, ",")

  //Remove leading spaces
  const noLeadingSpaces = noNewLines.replace(/, /g, ",")

  const arr = noLeadingSpaces.split(",")
  const uniqueTeams = [...new Set(arr)]
  return uniqueTeams
}

const countTeams = () => {
  return parseTeamNames().length
}

const countGames = () => {
  return readData().split("\n").length
}

const calculateMatchDays = () => {
  return countGames() / (countTeams() / 2)
}

const getTopValues = (scoresAfterEachRound, numberOfScoresDesired) => {
  const scoresArray = Object.entries(scoresAfterEachRound).sort(
    (a, b) => b[1] - a[1]
  )
  if (numberOfScoresDesired >= scoresArray.length) {
    return Object.fromEntries(scoresArray)
  }

  const topScores = scoresArray.slice(0, numberOfScoresDesired)

  return Object.fromEntries(topScores)
}

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

const formatObjectToString = (scoresObject) => {
  const str = JSON.stringify(scoresObject)

  //replace commas with newlines
  const removeCommas = str.replace(/,/g, "\n")

  //replace quotes and braces with ""
  const removeQuotesBraces = removeCommas.replace(/[{"}]/g, "")

  //replace colons with a space
  const removeColons = removeQuotesBraces.replace(/:/g, ", ")

  return removeColons
}

module.exports = {
  parseTeamNames,
  countTeams,
  countGames,
  calculateMatchDays,
  transformData,
  getTopValues,
  formatObjectToString,
}
