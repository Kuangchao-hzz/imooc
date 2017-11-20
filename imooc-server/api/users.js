var express = require('express')
var router = express.Router()
var userModel = require('../models/userModel.js')
// 用户登录
router.post('/signup', (req, res) => {
  userModel.findOne({id: 0}, function (err, person) {
    if (err) return console.log(err)
    console.log(person)
  })
  // var user = new userModel({
  //   username: req.body.username,
  //   password: req.body.password
  // })
  // user.save((err, data) => {
  //   if (err) return console.log(err)
  // })
  res.send({
    msg: 'access',
    code: 1,
    auth: {
      home: {
        admin: true
      },
      recommend: {
        admin: true
      },
      found: {
        admin: true
      },
      download: {
        admin: true
      },
      my: {
        admin: true
      },
      admin: {
        admin: true
      },
      AdminIndex: {
        admin: true
      }
    }
  })
})
// 用户权限接口
router.post('/admin/list', (req, res) => {
  res.send({
    code: 1,
    msg: 'access',
    list: [
      {
        id: 1,
        signName: 'admin',
        realName: '何周泽',
        admin: '管理员'
      }
    ],
    total: 1
  })
})
// 用户新增接口
router.post('/admin/add', (req, res) => {
  userModel.findOne({id: req.body.username}, function (err, data) {
    if (err) return console.log(err)
    console.log(data)
    if (data) {
      var user = new userModel({
        username: req.body.username,
        realname: req.body.realname,
        password: req.body.password
      })
      user.save((err, data) => {
        if (err) return console.log(err)
      })
      res.send({
        code: 1,
        msg: 'access'
      })
    } else {
      res.send({
        code: 2,
        msg: '改角色以被注册！'
      })
    }
  })
})
// 用户编辑接口
router.post('/admin/edit', (req, res) => {
  userModel.findOne({id: req.body.id}, function (err, data) {
    if (err) return console.log(err)
    if (data) {
      res.send(Object.assign({
        code: 1,
        msg: 'access'
      }, data))
    } else {
      res.send({
        code: 2,
        msg: '改角色不存在！'
      })
    }
  })
})

module.exports = router
