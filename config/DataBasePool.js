const mysql = require('mysql')
/*
@class 创建连接池
@methods [create,connect]*/

const pool = {
    pool:{},
    create(){
        // 创建连接池
        this.pool = mysql.createPool(config)
    },
    // 调用查询方法
    connection(sql,arr,cb){
        this.pool.getConnection((err,connection)=>{
            connection.query(sql,arr,cb)
        })
    }
}
config = {
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'nodedatabase'
}
// 初始化连接池
pool.create()
module.exports = pool