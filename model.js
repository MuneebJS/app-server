var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number
})

var patientData = mongoose.model("Patient", userSchema)
module.exports = patientData;