const express = require('express')
const BodyParser = require('body-parser')
const multer = require('multer')
const RequireDir = require('require-dir')
const cors = require('cors')

const app = express()

// const server = require('http').Server(app)
// const io = require('socket.io')(server)

app.use(BodyParser.json())
app.use(BodyParser.urlencoded({ extended: false }))


// app.use((req,res, next) => {
    //     req.io = io
    //     next()
    // })
    
app.use(cors())
require('./controllers/AuthController')(app)
require('./controllers/ProjectController')(app)
    
app.listen(3333)