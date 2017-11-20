var Mongoose = require('mongoose')
/*
* @Field username [用户账号]
* @Field password [用户密码]
* */
var userSchema = new Mongoose.Schema({
  username: String,
  realname: String,
  password: String
})
userSchema.pre('save', (next) => {
  console.log('1111')
  next()
})
var model = Mongoose.model('user', userSchema)

module.exports = model