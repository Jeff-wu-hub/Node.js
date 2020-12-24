const express = require('express')
const route = require('./routers/index')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(route)


app.listen(8888,()=>{
    console.log('服务器地址=>http://127.0.0.1:8888')
})

