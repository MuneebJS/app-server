const mongoose = require('mongoose')

const Schema = mongoose.Schema



const InfoSchema = new Schema({
    name : String
})


const User = mongoose.model('userInf' , InfoSchema)


module.exports = User