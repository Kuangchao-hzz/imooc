const courseAdminModal = require('../models/courseAdminModal.js')
const util = require('../Utils/utils')
const qs = require('qs')
const multer = require('../Utils/multerUtil')
// 课程文件上传
var courseUpload = multer.single('courseFile')

exports.courseUpload = (req, res, next) => {
  courseUpload(req, res, function (err) {
    if (err) {
      return console.log(`课程文件上传错误:/n${err}`)
    }
    next()

  })
}
exports.add = (req, res, next) => {
// 由于设置了enctype='multipart/form-data'这里使用multer的req.body能获取参数值
  console.log('课程新增请求参数:')
  console.log(req.body)
  res.send(util.code_success({}, '文件上传成功'))
}