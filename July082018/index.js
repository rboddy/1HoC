//index.js

//the requirements section where we get path, express, and handlebars
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const http = require('http')

//creating the express app
const app = express();

const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

//creatinging the hbs engine which I think is just a function that takes in an object with the some basic settings?
app.engine('.hbs', exphbs({
    //default layout says where the HTML lives for this handlebars engine
    defaultLayout: 'main',
    //extension name is pinned on to default layout and .hbs is the extension for handlebars
    extname: '.hbs',
    //this is why we needed path. To get the place where the layouts live. Makes sense
    layoutsDir: path.join(__dirname, 'views/layouts')
}))

//setting the app view engine to handlebars?
app.set('view engine', '.hbs');
//telling the app where views lives? Idk this section doesn't make sense.
app.set('views', path.join(__dirname, 'views'))
app.get('/', (request, response) => {
    response.render('home', {
      name: 'John'
    })
  })

//Okay so this isn't really working the way I wanted it to, but this is the first tutorial from node hero that I didn't really find easy to follow. Let's see what they're database section looks like real quick before I revisit this mess