const { calculate } = require("../src/calculateScores")

const consoleSpy = jest.spyOn(console, "log").mockImplementation()

describe("Unit tests for the calculateScores function", () => {
  beforeEach(() => {
    consoleSpy.mockClear()
  })
  test("The calculate function prints to the console", () => {
    const result = calculate()
    expect(console.log).toBeCalledTimes(4)
  })
})
