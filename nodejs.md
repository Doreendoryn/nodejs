Node js:
•	An environment to run js on the back end outside the browser
•	Built on chrome
•	Fast and efficient 

`Read about node js being event driven.`

`5th/November/2019`

-	Created a folder
-	Wrote npm init in the terminal which walks us through the package.json 
-	Pushed our work to new git repositories
-	Push work to a new branch `git branch develop`
-	Create a file and call it serve.js to run node with
-	Always commit changes. `git add, git commit , git push`
(npm node package manager)
-express allows us see our work in the browser.

`-use npm install express -- save` in the command line
creates dependencies in the package json with package `express`
          `GITIGNORE`
- create a file called `.gitignore` here git ignores files in this file (includes work to be ignored by git)
`/ node modules` (forward slash)
for files wwrite name without a slash.

Use express in index.js by requiring it
`const express = require ('express')`
` const app(variable) = ()`
creating a server where browsers can connect using listen method

creating a server that sends data to the browser(opened a port(3000) a server has to listen to whatever instructions)
check portable by checking the browser localhost:3000.
Browser asks for a get request from the server(listen)

handling GET because we have READ
we handle the get request with `app.get(path,callback)`
callbacks take to arguments (`requests and responses `)

