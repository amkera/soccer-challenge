### How I built this

1. Create a package.json, index.js, bin -> soccer. Add this to the soccer file within bin to make it executable:

```
#!/usr/bin/env node
require('../')()
```

I ran `chmod +x bin/soccer` to allow the bin file to be run. Then, I ran `npm link` at the root of the project to access it anywhere by referring to it as `soccer`

2. Add capability for user to type 'help', 'version', or 'scores' to view the help menu, package version, or soccer scores, respectively.

3. Use fs to read in the text file of input data

### Design

WIP
