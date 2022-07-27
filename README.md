### Soccer Scores CLI in Node.js

### Getting Started

Clone down this repo and run `npm install`
Type `soccer` into the command line prompt to view the menu.

`soccer version` will show the version of this application.
`soccer help` will show the menu.
`soccer scores` will ouput the soccer scores to the command line.

### Design

This application consists of two main files, helperFunctions.js and calculateScores.js

# helperFunctions.js

`helperFunctions.js` contains small helper functions that assist in the calculation of the scores.

`parseTeamNames` uses regex and Sets to return an array of all the team names, as a unique list.

`countTeams`, `countGames`, and `calculateMatchDays` return the number of teams, the number of games, and the number of matchdays, respectively.

`getTopValues` returns the top 3 teams with their scores, and is called in each iteration of the calculate() function to output the scores of the top 3 teams after every round.

`transformData` and `formatObjectToString` are functions that format the data in order to be ingested, or outputted to the console, respectively.

# calculate.js

`calculate.js` is the bulk of the application, and contains the algorithm to calculate the scores after each round takes place.

It makes use of some of the helper functions, and a constant called `startingScores` that is an object with each team's score set to 0 before the iterations begin. This also adds type fidelity, so that numbers are added to numbers inside the loops.

The outer loop contains two variables, `i` and `m`. `i` increases by 6 each time, since there are 6 teams playing once on a given match day.

Since the input data is already organized by matchday and there is no specific delimiter, the `i` variable in the loop can segment the data 6 teams at a time, or per matchday.

The second variable, `m`, is solely for outputting to the console. It starts at 1 and ends at 4, to capture each matchday.

The inner loop has the variable `j`, which begins at `i`, which represents the start of each match day. `j` has a limit at 6, and increases by 2 each time. The increase of 2 represents a game, between 2 players.

If the first team inside the inner loop has a higher score, they are awarded 3 points and the second team is awarded 0 points.
If first & second teams inside the inner loop are tied, each team is awarded 1 point.
If the second team inside the inner loop as a higher score, they are awarded 3 points and the first team is awarded 0 points.

After each iteration of the inner loop, which can be equated to a match day, the `formatObjectToString` and `getTopValues` run on the cumulative scores object to output it to the console. The `formatObjectToString` function takes an object and returns a string. The `getTopValues` function returns only the top 3 teams & their scores.

### Tests

Run `npm test` to run the test suites.

## Initial Configuration Notes

1. I created a package.json, index.js, and a bin -> soccer directory. I added the following to the soccer file within bin to make it executable:

```
#!/usr/bin/env node
require('../')()
```

I ran `chmod +x bin/soccer` to allow the bin file to be run. Then, I ran `npm link` at the root of the project to access it anywhere by referring to it as `soccer`
