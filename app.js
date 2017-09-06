const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyparser = require('body-parser')
const patientData = require('./model')

// mongoose.connect('mogodb://localhost/users' )
mongoose.connect("mongodb://muneeb:muneeb123@ds031877.mlab.com:31877/mlab_practice",{
    useMongoClient : true
})

var db = mongoose.connection;



mongoose.Promise = global.Promise

app.use(bodyparser.json())

app.get('/', function(req, res, next) {
  console.log('path /')
    res.send('path /')
})

app.get('/api', function(req, res, next) {
    patientData.find({})
    .then((data)=>{
        res.send(data)
    })
})

app.post('/api/addName', function(req, res, next) {
let name = req.body.name;
let date = req.body.date;
let obj = {
    patient: {
        name: name,
        date: date
    }
}
patientData.create(
 obj
)
    .then(()=>{
        res.send(name);
    })
})

module.exports  = app




