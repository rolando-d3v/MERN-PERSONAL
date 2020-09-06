const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {API_VERSION} = require('./config')

//server
const app = express()


//middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())



//loading routers
app.use(`/api/${API_VERSION}`, require('./routers/user')) 


module.exports = app