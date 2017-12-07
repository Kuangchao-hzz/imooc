const express = require('express')
// 该模块也是 Express 模块中间件，方便我们处理客户端的 session
const session = require('express-session')
const cookieParser = require('cookie-parser')
const MongoStore = require('connect-mongo')(session)
const bodyParser = require('body-parser')
const app = express()
const port = 3030
const mgoUrl = 'mongodb://localhost:27017/imoocServer'
// 链接数据库
const Mongoose = require('mongoose')
Mongoose.Promise = global.Promise
Mongoose.connect(mgoUrl, {useMongoClient: true}).then(() => {
  console.log('数据库链接成功！')
}, (err) => {
  console.log(111)
  console.log(`数据库链接失败\n${err}`)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
// session 中间件
app.use(session({
  // 设置 cookie 中保存 session id 的字段名称
  // name: 'sessionId',
  // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
  secret: 'imooc',
  // 强制更新 session
  resave: true,
  // 设置为 false，强制创建一个 session，即使用户未登录
  saveUninitialized: true,
  // 将session数据保存到数据库
  store: new MongoStore({
    url: mgoUrl,
    collection: 'session'
  }),
  // 过期时间，过期后 cookie 中的 session id 自动删除
  // cookie: {
  //   maxAge: 1000 * 60 * 10
  // }
}))
app.use('/usersAdmin', require('./api/usersAdmin'))
app.use('/courseAdmin', require('./api/courseAdmin'))

app.listen(port)
console.log(`server running at ${port}...`)
