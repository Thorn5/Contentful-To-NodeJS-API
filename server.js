// npm init
// npm install express
// npm install nodemon
// npm install pg // postgres pool
// npm install dotenv // access .env
// npm install body-parser // needed for req.body
// .env PGPORT=5432 (postgres default port)
// package.json entry "start": "nodemon index.js",
// npm install contentful-cli //access data from contentful


require('dotenv').config();
const express = require('express'); 
const app = express(); 
// console.log(process.env) // working 
const port = 8001 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json())
const recipes = require('./recipeRouter'); 
app.use('/api/recipes', recipes)
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

