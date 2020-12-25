const pool = require('../config/DataBasePool')
module.exports = {
    selectUser(arr,cb){ // 查询用户
        pool.connection('SELECT * FROM user WHERE user = ?AND password = ?',arr,cb)
    }
}