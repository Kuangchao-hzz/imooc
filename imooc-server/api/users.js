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
	userModel.fetch((err, users) => {
	  if (err) return console.log(err)
		res.send({
			code: 1,
			msg: 'access',
			list: users,
			total: 1
		})
  })
})
// 用户新增接口
router.post('/admin/add', (req, res) => {
	var user = new userModel({
		username: req.body.username,
		realname: req.body.realname,
		password: req.body.password
	})
	userModel.findByUsername(req.body.username, (err, data) => {
		console.log(data)
		if (err) return console.log(err)
    if (!data) {
	    user.save((err, data) => {
		    if (err) return console.log(err)
		    res.send({
			    code: 1,
			    msg: 'access'
		    })
	    })
    } else {
	    res.send({
		    code: 2,
		    msg: '该名称以被注册'
	    })
    }

  })
})
// 用户编辑接口
router.post('/admin/edit', (req, res) => {
	var id = req.body.id
	if (id) {
		userModel.findById(id, function (err, data) {
			if (err) return console.log(err)
			res.send({
				code: 1,
				msg: 'access',
				data: data
			})
		})
	} else {
		res.send({
			code: 2,
			msg: 'id不存在'
		})
	}

})
// 查询单条接口
router.post('/admin/findById', (req, res) => {
	var id = req.body.id
	if (id) {
		userModel.findById(id, function (err, data) {
			if (err) return console.log(err)
			res.send({
				code: 1,
				msg: 'access',
				data: data
			})
		})
	} else {
		res.send({
			code: 2,
			msg: 'id不存在'
		})
	}

})
// 用户删除接口
router.post('/admin/del', (req, res) => {
	let id = req.body.id
	if (id) {
		userModel.remove({_id: id}, function (err, data) {
			console.log(111)
			if (err) return console.log(err)
			res.send({
				code: 1,
				msg: 'access'
			})
		})
	} else {
		res.send({
			code: 2,
			msg: 'id不存在'
		})
	}
})
module.exports = router
