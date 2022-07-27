const {
  calculateMatchDays,
  countTeams,
  countGames,
  parseTeamNames,
  getTopValues,
  transformData,
  formatObjectToString,
} = require("../src/helperFunctions")

describe("Unit tests for the helper functions", () => {
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
    const testObject = {
      team1: 5,
      team2: 6,
      team3: 8,
      team4: 2,
      team5: 4,
      team6: 3,
    }

    const result = getTopValues(testObject, 4)
    const result2 = getTopValues(testObject, 6)

    expect(typeof result).toBe("object")

    expect(result).toMatchObject({
      team3: 8,
      team2: 6,
      team1: 5,
      team5: 4,
    })
    expect(Object.entries(result).length).toBe(4)

    expect(result2).toMatchObject({
      team3: 8,
      team2: 6,
      team1: 5,
      team5: 4,
      team6: 3,
      team4: 2,
    })
    //Expect the object to be returned if all values are requested
  })

  test("Reads text file and returns an array", () => {
    const result = transformData()

    const randomTeamScore = result[Math.floor(Math.random() * result.length)]

    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(24)
    expect(typeof randomTeamScore).toBe("object")
    expect(typeof Object.keys(randomTeamScore)[0]).toBe("string")
    expect(typeof Object.values(randomTeamScore)[0]).toBe("number")
  })

  test("Reads object and returns a string", () => {
    const testObject = {
      "Team 1": 3,
      "Team 2": 2,
      "Team 3": 1,
    }
    const result = formatObjectToString(testObject)
    expect(result).toEqual(expect.not.stringMatching(/[{":}]/g))
    //Expect the result to not have colons, quotes, or curly braces
  })
})
