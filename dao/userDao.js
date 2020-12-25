const pool = require('../config/DataBasePool')
module.exports = {
    selectUser(arr,cb){ // 查询用户
        pool.connection('SELECT * FROM user WHERE id = ?',arr,cb)
    },
    addUser(arr,cb){ // 增加用户
        console.log(arr)
        pool.connection('INSERT INTO nodedatabase.user (id, name, customer, email, phone, user, password, address) VALUES (?,?,?,?,?,?,?,?)',arr,cb)
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
    selectID(arr,cb){
        pool.connection('SELECT * FROM user ',arr,cb)
    }
}