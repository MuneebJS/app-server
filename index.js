// const port = process.env.port || 3050
// app.listen(process.env.PORT || 3000, function(){
//     console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
//   });
const app = require('./app')


var port = process.env.PORT || 3050;

// app.listen(port , ()=>{
//     console.log('server is running on port' , port)

// })

app.listen(port, function(){
    console.log("Express server listening on port", port);
  });