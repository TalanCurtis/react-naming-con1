require('dotenv').config()
const express = require('express')
const bodyParser=require('body-parser');

const app = express()

// Destructuring .env file
const { SERVER_PORT } = process.env

// Top Level middleware
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json())

// Database Connection
////  massive(CONNECTION_STRING).then(db => {console.log('Database up'); app.set('db', db)})


// Controller Imports
const testController = require('./controllers/testController')

// Endpoint
app.get('/api/test', (req, res)=>{
    res.status(200).send('Hits')
})
app.get('/api/test2', testController.testGet)


// Launch Server
app.listen(SERVER_PORT, () => (console.log(`boiling on port: ${SERVER_PORT}`)))
