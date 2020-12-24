const mysql = require('mysql')
module.exports = {
    /*
    * 用户登录接口控制*/
    userLogin(req,res){
        const obj ={
            user: req.body.user,
            password: req.body.password
        }
       const data =  query(obj)
        console.log(data)
        res.send(obj) // 返回数据
    }
}
query = function (obj){
    let db = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'nodedatabase'
    })
    db.connect()
    db.query('SELECT * FROM user WHERE user = ? AND password = ?', [obj.user, obj.password], (err, data) => {
        return data !== null? data:err
    })
}
