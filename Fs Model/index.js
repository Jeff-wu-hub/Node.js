const fs = require('fs')
//1、fs.stat() 检测目录
// 2、fs.mkdir()创建目录
            // fs.mkdir('./css',(err)=>{
            //     if(err){
            //         console.log(err)
            //     }
            //     console.log('创建成功')
            // })
//3.创建文件
            // fs.writeFile('./index.txt','hello node.js',(err)=>{
            //     if(err){
            //         console.log('创建失败')
            //     }
            //     console.log('创建成功')
            // })
//4、fs.appendFile()追加文件内容，如果原来有文件，将新的内容写入
            // fs.appendFile('./css.css','body{color:red;}',(err)=>{
            //     if(err){
            //         return console.log('创建文件失败')
            //     }
            //     console.log('创建成功')
            // })
//5、fs.readFile() 读取文件
            // fs.readFile('./css.css',(err,data)=>{
            //     console.log(data)
            //     console.log(data.toLocaleString())
            // })
// 6、fs.rename()重命名文件
            // fs.rename('./css.css','./a.css',(err)=>{
            //     console.log(err)
            // })
