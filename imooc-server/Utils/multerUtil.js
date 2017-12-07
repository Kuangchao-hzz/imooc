const multer=require('multer')

const storage = multer.diskStorage({
  // destination 用于上传文件路径， uploads文件夹会自动创建
  destination: function (req, file, cd) {
    cd(null, './uploads')
  },
  // filename 用于给上传文件重命名， 获取添加后缀名
  filename: function (req, file, cd) {
    var fileFormat = file.originalname.split('.')
    var courseUrl = `${ file.fieldname }${ Date.now() }.${fileFormat[fileFormat.length - 1]}`
    Object.assign(req.body, {
      courseUrl: courseUrl
    })
    console.log('新命名文件:')
    console.log(req.body)
    cd(null, courseUrl)
  }
})

//添加配置文件到 multer对象。
var upload = multer({
  storage: storage
});

//如需其他设置，请参考multer的limits,使用方法如下。
//var upload = multer({
//    storage: storage,
//    limits:{}
// });

//导出对象
module.exports = upload
