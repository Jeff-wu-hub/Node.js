const userDao = require('../dao/userDao')
module.exports = {
    /*
    * 用户登录接口控制*/
    userLogin(req,res){
        const obj ={
            user: req.body.user,
            password: req.body.password
        }
        userDao.selectUser([obj.user,obj.password],(err,data)=>{
            res.send(data[0])
        })
    }
}
