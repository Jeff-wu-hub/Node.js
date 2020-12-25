const mysql = require('mysql')
module.exports = {
    doFun:function (sql,arr,fun) {
        const db = mysql.createConnection(config)
        db.connect()
        db.query(sql,arr,fun)
        db.end()
    }
}
config = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'nodedatabase'
}