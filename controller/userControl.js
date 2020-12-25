const db = require('../config/db.connect')
module.exports = {
    /*
    * 用户登录接口控制*/
    userLogin(req,res){
        const obj ={
            user: req.body.user,
            password: req.body.password
        }
        db.doFun('SELECT * FROM user WHERE user = ? AND password = ?', [obj.user, obj.password],(err,data)=>{
            res.send(data[0])
        })
    }
}
