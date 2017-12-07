var express = require('express')
var router = express.Router()
var userAdmin = require('../controllers/userAdmin')
// 账号登录
router.post('/signin', userAdmin.signin)
// 账号登出接口
router.post('/logout', userAdmin.logout)
// 账号权限接口
router.post('/admin/list', userAdmin.list)
// 账号新增接口
router.post('/admin/add', userAdmin.add)
// 账号编辑接口
router.post('/admin/edit', userAdmin.edit)
// 查询单条接口
router.post('/admin/findById', userAdmin.findById)
// 账号删除接口
router.post('/admin/del', userAdmin.del)

module.exports = router
