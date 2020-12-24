const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/userControl')
router.get('/',userCtrl.userLogin)
module.exports = router
