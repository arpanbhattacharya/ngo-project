const mongoose = require('mongoose')

const schema = mongoose.Schema({

    name:String,
    venue:String,
    date:String,
    image:String,
    desc:String,
})

module.exports = mongoose.model("Event",schema)