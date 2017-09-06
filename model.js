var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    age: Number
})

var User = mongoose.model('User', userSchema);
var user1 = new User({
    name: "Muneeb",
    age: 19
})

// user1.save(function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('meow');
//     }
// });