/**
 Lab 1 - Routing with Connect

 In this lab you will use Node and Connect to create a simple web site.

 - Create a new project called comp2068-lab1.

 - Initialize npm and use the prompts to generate a package.json file.

 - Install the connect npm package.

 - Download and include the node .gitignore file from https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore

 - Create server.js that uses connect to listen for HTTP requests on port 3000 and shows a message in the console when it starts.

 - Inside server.js, use the connect npm package to map 3 routes (you do not need to map the root "/"):
 - /me
 - /mom
 - /dad

 - In the handler for each route, write a 1-2 sentence response introducing this person in your family.  For example:

 http://localhost:3000/mom =>

 Ethel is a retired computer programmer who started her career at IBM in the 1960's.  She is in her 80's now but looks 65.

 To submit your lab:

 - Create a private git repository called comp2068-lab1 and invite me - ifotn.
 - Submit the link to your repository on Blackboard.
 */

let connect = require('connect')
const fs = require('fs')
let app = connect()
let index = ((req,res) => {
    res.writeHead(200)
    res.write("Hello World!")
})

let me = ((req,res) => {
    res.writeHead(200)
    res.write("Hi, my name is Jillian.\n" +
        "I was born shortly after the new year in 2000, so I can tell my age by the year.\n" +
        "I like to write, and I got into computer programming to give me a buffer job while I write.")
    res.end()
})

let mom = ((req,res) => {
    res.writeHead(200)
    res.write("Catherine, or Cathy, is my mom.\n" +
        "She's been through a lot in her life, but she's still going strong.\n" +
        "Hobbies include finding dead people and gardening, and for legal reasons; no they aren't connected.")
    res.end()
})

let dad = ((req,res) => {
    res.writeHead(200)
    res.write("Andrew is my dad.\n" +
        "He's not biologically my father, but he'll always be my dad more than any other.\n" +
        "He does everything for us.")
    res.end()
})

app.use(index)
app.use('/me', me)
app.use('/mom', mom)
app.use('/dad', dad)

app.listen(3000)

console.log("Hello Worlds! I am alive at the 3000 port!");