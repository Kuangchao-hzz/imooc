var Mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var util = require('../Utils/utils')
/*
* @Field username [管理员账号]
* @Field realname [管理员真实姓名]
* @Field password [管理员密码]
* */
// https://www.cnblogs.com/winyh/p/6682039.html
// schema可以理解为mongoose对表结构的定义
// 不仅仅可以定义文档的结构和属性，还可以定义文档的实例方法、静态模型方法、复合索引等 schema不具备操作数据库的能力
var userAdminSchema = new Mongoose.Schema({
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
    unique: true
  },
  realname: String,
  rolename: String,
  auth: Object,
  meta: {
	  createTime: {
		  type: Date,
		  default: Date.now()
	  },
	  updateTime: {
		  type: Date,
		  default: Date.now()
	  }
  }
})
// 每次保存用户前都会执行该回调函数
userAdminSchema.pre('save', function (next) {
  let userAdmin = this
  if (userAdmin.isNew) {
    userAdmin.meta.createTime = userAdmin.meta.updateTime = Date.now()
  } else {
    userAdmin.meta.updateTime = Date.now()
  }
  util.bcryptHandle(userAdmin.password).then(resolve => {
    userAdmin.password = resolve
    next()
  }, reject => {
    console.log(`reject: ${reject}`)
  })
})

userAdminSchema.methods = {
  comparePassword: function(_password, cd) {
    bcrypt.compare(_password, this.password, function (err, isMatch) {
      if (err) return cd(err)

      cd(null, isMatch)
    })
  }
}

// 静态方法，只有经过模型实例化model后才有这个方法
userAdminSchema.statics = {
  fetch: function (cd) {
    return this
      .find({})
      .exec(cd)
  },
  findById: function (id, cd) {
    return this
      .findOne({_id: id})
      .exec(cd)
  },
	findByUsername: function (username, cd) {
		return this
			.findOne({username: username})
			.exec(cd)
	}
}

// Model是由Schema编译而成的假想（fancy）构造器，具有抽象属性和行为。
// Model的每一个实例（instance）就是一个document。document可以保存到数据库和对数据库进行操作
var model = Mongoose.model('userAdmin', userAdminSchema)

module.exports = model