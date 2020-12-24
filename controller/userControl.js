module.exports = {
    /*
    * 用户登录接口控制*/
    userLogin(req,res){
        const obj ={
            user: req.body.user,
            password: req.body.password
        }
        res.send(obj) // 返回数据
    }
}
