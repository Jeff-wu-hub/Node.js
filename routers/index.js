const express = require('express')// 引入express组件
const router = express.Router()// 复制路由方法，方便后续使用
const userCtrl = require('../controller/userControl')// 引入控制器

router.get('/user',userCtrl.userGet)
router.put('/user',userCtrl.userUpdate)
router.post('/user',userCtrl.userAdd)
router.delete('/user',userCtrl.userDelete)



module.exports = router// 暴露方法
