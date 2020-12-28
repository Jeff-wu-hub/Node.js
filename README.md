#Node.js API
-----
使用express框架搭建
>##成功状态状态码
|状态码|状态信息|
|:----:|:----:|
|200|获取成功|
|201|更新成功|
|202|删除成功|
|203|添加成功|
|204|数据为空|
|205|已经删除|
>##错误状态码
|状态码|状态信息|
|:----:|:----:|
|400|查询失败|
|401|更新失败|
|000|输入内容为空|



#1.用户管理
##1.1增加用户信息
###API

|Url|Methods|
|:----:|:----:|
|/user|POST|
###参数信息

|Params|Description|是否为空|
|:----:|:----:|:----:|
|user|账户|Not Null|
|password|密码|Not Null|
|name|名字||
|customer|用户职位||
|email|电子邮件||
|phone|电话号码||
|address|地址信息||

###响应数据

```json
{
    "meta": {
        "code": 203,
        "message": "添加成功！"
    },
    "data": [
        {
            "id": 5,
            "name": "55",
            "customer": "用户3",
            "email": "123456@qq.com",
            "phone": 123456789,
            "user": "xasdasd",
            "password": "admin",
            "address": "浙江省杭州市余杭区"
        }
    ]
}
```
##1.2增加用户信息
###API

|Url|Methods|
|:----:|:----:|
|/user|DELETE|
###参数信息

|Params|Description|是否为空|
|:----:|:----:|:----:|
|id|用户ID|不能为空|
###响应信
```json
{
    "code": 202,
    "message": "删除成功！"
}
```
##1.2增加用户信息
###API

|Url|Methods|
|:----:|:----:|
|/user|DELETE|
###参数信息

|Params|Description|是否为空|
|:----:|:----:|:----:|
|id|用户ID|不能为空|
###响应信息
```json
{
    "code": 202,
    "message": "删除成功！"
}
```
##1.3修改用户信息
###1.3.1修改密码
####API

|Url|Methods|
|:----:|:----:|
|/user/password|PUT|
####参数信息

|Params|Description|是否为空|
|:----:|:----:|:----:|
|id|用户ID|不能为空|
|oldPassword|原始密码|不能为空|
|newPassword|新密码|不能为空|
####响应信息
```json
{
    "code": 201,
    "message": "更新成功！"
}
```
###1.3.2修改电话号
####API

|Url|Methods|
|:----:|:----:|
|/user/phone|PUT|
####参数信息

|Params|Description|是否为空|
|:----:|:----:|:----:|
|id|用户ID|不能为空|
|phone|新电话号|不能为空|
####响应信息
```json
{
    "code": 201,
    "message": "更新成功！"
}
```
###1.3.3修改电话号
####API

|Url|Methods|
|:----:|:----:|
|/user/address|PUT|
####参数信息

|Params|Description|是否为空|
|:----:|:----:|:----:|
|id|用户ID|不能为空|
|address|地址信息|不能为空|
####响应信息
```json
{
    "code": 201,
    "message": "更新成功！"
}
```