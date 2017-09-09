var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    date: String
})

var patientData = mongoose.model("Patient", userSchema)
module.exports = patientData;