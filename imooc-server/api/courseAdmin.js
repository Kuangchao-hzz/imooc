const express = require('express')
const router = express.Router()
const courseAdmin = require('../controllers/courseAdmin')

router.post('/admin/add', courseAdmin.courseUpload, courseAdmin.add)

module.exports = router
