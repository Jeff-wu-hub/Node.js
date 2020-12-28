const pool = require('../config/DataBasePool')
module.exports = {
    selectUser: function (arr, cb) { // 查询用户
        if (arr[0] === undefined) {
            pool.connection('SELECT * FROM user', arr, cb)
        } else {
            pool.connection('SELECT * FROM user WHERE id = ?', arr, cb)
        }
    },
    addUser(arr,cb){ // 增加用户
        pool.connection('INSERT INTO nodedatabase.user (id, user, password,name, customer, email, phone,  address) VALUES (?,?,?,?,?,?,?,?)',arr,cb)
    },
    deleteUser(arr,cb){
        pool.connection('DELETE FROM user WHERE id = ?',arr,cb)
    },
    updateUser(arr,cb){
        pool.connection('UPDATE user SET password = ? WHERE id = ?',arr,cb)
    },
    selectPassword(arr,cb){
        pool.connection('SELECT password FROM user WHERE id = ?',arr,cb)
    },
    selectID(arr,cb){ // 获取数量用的临时函数
        pool.connection('SELECT * FROM user ',arr,cb)
    },
    updatePhone(arr,cb){
        pool.connection('UPDATE user SET phone = ? WHERE id = ?',arr,cb)
    },
    updateAddress(arr,cb){ //更新地址
        pool.connection('UPDATE user SET address = ? WHERE id = ?',arr,cb)
    }
}