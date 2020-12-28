const express = require('express')
const UserRoute = require('./routers/userRoute')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(UserRoute)


app.listen(8080,()=>{
    console.log('服务器地址=>http://127.0.0.1:8080')
})

