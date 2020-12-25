const userDao = require('../dao/userDao') // 引入DAO数据控制
const meta = require('../config/MetaInfo') // 引入状态信息
module.exports = {
    // 查询用户信息
    userGet(req,res){
            const id = req.body.id
            if(!id){
                res.send(meta._000.meta)
            }
            else{
                userDao.selectUser([id],(err,data)=>{
                if(data.length>0){
                    const obj = {
                        meta:meta._200.meta,
                        data:data[0]
                    }
                    res.send(obj)
                }
                else{
                    res.send(meta._400.meta)
                }
            })
            }
    },
    // 更改用户密码信息
    userUpdate: function (req, res) {
        const id = req.body.id
        const oldPassword = req.body.oldPassword
        const newPassword = req.body.newPassword
        if(!id){
            res.send(meta._000.meta)
        }
        else{
            userDao.selectPassword([id], (err, data) => {
                if (oldPassword === data[0].password) {
                    userDao.updateUser([newPassword, id])
                    res.send(meta._201.meta)
                } else {
                    let obj = {
                        meta: meta._401.meta,
                        info: '原始密码错误'
                    }
                    res.send(obj)
                }
            })
        }
    },
    // 删除用户信息
    userDelete(req,res){
        const body = req.body
        if(!body.id){
            res.send(meta._000.meta)
        }else{
            userDao.deleteUser([body.id],(err,data)=>{
                if(data.affectedRows === 0){
                    res.send(meta._205.meta)
                }else{
                    res.send(meta._202.meta)
                }
            })
        }
    },

    // 新增用户信息
    userAdd(req,res){
        const body = req.body
        if(!body.user){
            res.send(meta._000.meta)
        }
        else{
            userDao.selectID((err,data)=>{
                const id = data.length + 1 // 新增ID内容
                const arr = []
                arr.push(id)
                for(let i in body) {
                    arr.push(body[i])
                }
                userDao.addUser(arr)
                userDao.selectUser([id],(err,data)=>{
                    res.send({
                        meta:meta._203.meta,
                        data:data
                    })
                })
            })
        }
    }
}
