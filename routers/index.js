const express = require('express')// 引入express组件
const router = express.Router()// 复制路由方法，方便后续使用
const userCtrl = require('../controller/userControl')// 引入控制器

router.get('/',userCtrl.userLogin)// 读取地址，使用控制器
router.post('/user',userCtrl.userLogin)

module.exports = router// 暴露方法
