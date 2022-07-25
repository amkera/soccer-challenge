const {
  calculateMatchDays,
  countTeams,
  countGames,
  parseTeamNames,
} = require("../src/helperFunctions")

test("Returns number of teams", () => {
  expect(countTeams()).toBe(6)
})

test("Returns number of games", () => {
  expect(countGames()).toBe(12)
})

test("Returns number of match days", () => {
  expect(calculateMatchDays()).toBe(4)
})

test("Returns team names", () => {
  let teamNames = parseTeamNames()

  const isUnique = () =>
    Array.isArray(teamNames) && new Set(teamNames).size === teamNames.length

  expect(teamNames.length).toBe(6)
  expect(isUnique()).toBe(true)
})

test("Gets top scores after each match day", () => {
  console.log("WIP")
})

test("Reads text file and returns an array", () => {
  console.log("WIP")
})

test("Reads object and returns a string", () => {
  console.log("WIP")
})
