var usersAdminModal = require('../models/usersAdminModel.js')
var util = require('../Utils/utils')
const qs = require('qs')

exports.signin = (req, res) => {
  var username = req.body.username
  var password = req.body.password
  usersAdminModal.findOne({username: username}, function (err, data) {
    if (err) return console.log(err)
    if (data) {
      data.comparePassword(password, function (err, isMatch) {
        if (err) return console.log(err)
        if (isMatch) {
          req.session.usersAdminModal = req.body
          res.send(util.code_success({data: data}))
        } else {
          res.send(util.code_abn('用户或密码不正确'))
        }
      })
    } else {
      res.send(util.code_abn('账号不存在'))
    }
  })
}
exports.logout = (req, res) => {
  delete req.session.usersAdminModal
  if (!req.session.usersAdminModal) {
    res.send(util.code_success({}))
  }
}
exports.list = (req, res) => {
  if (req.session.usersAdminModal) {
    usersAdminModal.fetch((err, users) => {
      if (err) return console.log(err)
      res.send(util.code_success({
        list: users,
        total: 1
      }))
    })
  } else {
    res.send(util.code_abn('请重新登录'))
  }
}
exports.add = (req, res) => {
  var user = new usersAdminModal(req.body)
  usersAdminModal.findByUsername(req.body.username, (err, data) => {
    if (err) return console.log(err)
    if (!data) {
      user.save((err, data) => {
        if (err) return console.log(err)
        res.send(util.code_success({}))
      })
    } else {
      res.send(util.code_abn('该名称以被注册'))
    }
  })
}
exports.edit = (req, res) => {
  var params = qs.parse(req.body)
  if (params.id) {
    util.bcryptHandle(params.password).then(resolve => {
      console.log(`bcrypt 返回的密码 ${resolve}`)
      params.password = resolve
      usersAdminModal.findByIdAndUpdate({_id: params.id}, {$set: params}, function (err, data) {
        if (err) return console.log(err)
        res.send(util.code_success({data: data}))
      })
    }, reject => {
      console.log(`reject: ${reject}`)
    })
  }
}
exports.findById = (req, res) => {
  var id = req.body.id
  if (id) {
    usersAdminModal.findById(id, function (err, data) {
      if (err) return console.log(err)
      res.send(util.code_success({data: data}))
    })
  } else {
    res.send(util.code_abn('id不存在'))
  }
}
exports.del = (req, res) => {
  let id = req.body.id
  if (id) {
    usersAdminModal.remove({_id: id}, function (err, data) {
      if (err) return console.log(err)
      res.send(util.code_success({}))
    })
  } else {
    res.send(util.code_abn('id不存在'))
  }
}