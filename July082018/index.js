//index.js

//the requirements section where we get path, express, and handlebars
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

//creating the express app
const app = express();

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