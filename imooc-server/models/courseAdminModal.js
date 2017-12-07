var Mongoose = require('mongoose')
var bcrypt = require('bcrypt')
var util = require('../Utils/utils')

var courseAdminSchema = new Mongoose.Schema({
  title: String,        // 课程标题
  languageType: String, // 课程语言
  authorName: String,   // 作者姓名
  authorLevel: String,  // 作者等级
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

courseAdminSchema.pre('save', function (next) {
  let courseAdmin = this
  if (courseAdmin.isNew) {
    courseAdmin.meta.createTime = courseAdmin.meta.updateTime = Date.now()
  } else {
    courseAdmin.meta.updateTime = Date.now()
  }
})

courseAdminSchema.statics = {
  fetch: function (cd) {
    return this.find({}).exec(cd)
  },
  findById: function (id, cd) {
    return this.findById({_id: id}).exec(cd)
  }
}

var modal = Mongoose.model('courseAdmin', courseAdminSchema)

module.exports = modal
