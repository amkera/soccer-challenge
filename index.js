const minimist = require("minimist")

module.exports = () => {
  const args = minimist(process.argv.slice(2))

  // let command = args._[0] || "scores"
  let command = args._[0] || "help"

  if (args.version || args.v) {
    command = "version"
  }

  if (args.help || args.h) {
    command = "help"
  }

  if (args.scores || args.s) {
    command = "scores"
  }

  switch (command) {
    case "version":
      require("./cmds/version")(args)
      break

    case "help":
      require("./cmds/help")(args)
      break

    case "scores":
      require("./cmds/scores")(args)
      break

    default:
      console.error(`Sorry, "${command}" is not a valid command.`)
      break
  }
}

// calculateScores()
