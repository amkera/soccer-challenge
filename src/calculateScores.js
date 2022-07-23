const {
  parseTeamNames,
  countTeams,
  transformData,
  getTopValues,
  formatObjectToString,
} = require("./helperFunctions")

const startingScores = parseTeamNames().reduce((obj, teamName) => {
  return { ...obj, [teamName]: 0 }
}, {})

const calculate = () => {
  let cumulativeScores = startingScores
  let teams = countTeams()

  const teamScores = transformData()

  for (let i = 0, m = 1; i < teamScores.length, m < 5; i += teams, m++) {
    for (let j = i; j < i + teams; j += 2) {
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

    console.log(
      `Match day ${m}`,
      `\n${formatObjectToString(getTopValues(cumulativeScores, 3))}\n`
    )
  }
}

calculate()

module.exports = function calculateScores() {
  calculate
}
