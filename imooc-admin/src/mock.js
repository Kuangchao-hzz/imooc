// http://mockjs.com/
const Mock = require('mockjs')
const Random = Mock.Random

const authRule = function () {
  return {
    home: {
      admin: true
    },
    recommend: {
      admin: true
    },
    course: {
      admin: true
    },
    found: {
      admin: true
    }
  }
}
const recommend = function () {
  let data = {
    msg: '',
    code: 1,
    list: [],
    total: 0
  }
  Array.from({length: 89}, (a, b, c) => {
    data.list.push({
      id: b + 1,
      name: Random.cname(),
      age: Random.natural(20, 30),
      address: Random.province()
    })
    data.total = 89
  })
  return data
}

Mock.mock('/api/mock/adminRule', 'post', authRule)
Mock.mock('/api/mock/home/recommend', 'post', recommend)
