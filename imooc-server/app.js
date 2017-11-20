const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = express()
const port = 3030
const mgoUrl = 'mongodb://localhost:27017/imoocServer'
// 链接数据库
const Mongoose = require('mongoose')
Mongoose.Promise = global.Promise
Mongoose.connect(mgoUrl, {useMongoClient: true}).then(() => {
  console.log('数据库链接成功！')
}, (err) => {
  console.log(`数据库链接失败\n${err}`)
})

// session 中间件
app.use(session({
  // 设置 cookie 中保存 session id 的字段名称
  name: 'imooc',
  // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  secret: 'imooc',
  // 强制更新 session
  resave: true,
  // 设置为 false，强制创建一个 session，即使用户未登录
  saveUninitialized: false,
  // 过期时间，过期后 cookie 中的 session id 自动删除
  cookie: {
    maxAge: 1000
  }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/users', require('./api/users'))

// 添加模板必需的三个变量
app.use(function (req, res, next) {
  res.locals.user = req.session.user
  next()
})
app.listen(port)
console.log(`server running at ${port}...`)
