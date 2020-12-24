const express = require('express')
const app = express()
const route = require('./routers/')
app.listen(8888,()=>{
    console.log('服务器启动成功')
})
app.use(route)
