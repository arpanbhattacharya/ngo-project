const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require('body-parser')
const expressFileupload = require('express-fileupload')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://arpan2:arpan007@cluster0.jxzqgep.mongodb.net/arpan2db?retryWrites=true&w=majority')


const main_event = require("./routes/event")
const member = require("./routes/member")

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// file upload method
app.use(expressFileupload())

// express static file/folder
app.use(express.static('uploads'))

app.use("/events",main_event)
app.use("/members",member)

app.listen(4000)