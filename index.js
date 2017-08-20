const port = process.env.port || 3050
const app = require('./app')




app.listen(port , ()=>{
    console.log('server is running on port' , port)

})