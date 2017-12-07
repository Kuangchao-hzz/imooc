var bcrypt = require('bcrypt')

module.exports = {
  /*---------- 返回用 ‘bcrypt’ 加密后的密码 ----------*/
  bcryptHandle (password) {
    var SLAT_WORK_FACTOR = 10
    return new Promise((resolve, reject) => {
      // SLAT_WORK_FACTOR: 计算强度 值越大 破解所需要的彩虹表越困难
      bcrypt.genSalt(SLAT_WORK_FACTOR, function (err, salt) {
        if (err) reject(err)
        // 生成一个随机的盐（额外的规则）
        bcrypt.hash(password, salt, function (err, hash) {
          if (err) reject(err)
          resolve(hash)
        })
      })
    })
  },
  code_success (data, msg) {
    if (!data instanceof Object) {
      return `传入的参数不是一个对象`
    }
    return Object.assign({
      code: 1,
      msg: msg
    }, data)
  },
  code_abn (msg) {
    return {
      code: 2,
      msg: msg
    }
  }
}
