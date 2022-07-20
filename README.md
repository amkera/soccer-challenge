### How I built this

1. Create a package.json, index.js, bin -> soccer. Add this to the soccer file within bin to make it executable:

```
#!/usr/bin/env node
require('../')()
```

Run chmod +x bin/soccer to make the run the bin file. Run `npm link` at the root of the project to access it anywhere using `soccer`

2. Add capability for user to type 'help' or 'version' after soccer to view a menu, or see the version number of the package, respectively.

3. Use fs to read text file of input data

4.

### Design

WIP
