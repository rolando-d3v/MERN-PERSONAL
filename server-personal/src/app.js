const express = require('express');
const bodyParser = require('body-parser');

//server
const app = express()

const {API_VERSION} = require('./config')

//middleware
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//server db


//loading routers
app.use('/api', (req, res)=> {
    res.json({message: 'hola mundo'})
})

module.exports = app