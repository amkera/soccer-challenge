const menus = {
  main: `
      soccer <options>
  
      Options:
      scores ............. show the soccer scores
      version ............ show package version
      help ............... show help menu for a command`,
}

module.exports = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0]

  console.log(menus[subCmd] || menus.main)
}
