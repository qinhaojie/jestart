'use strict'
const path = require('path')
const fsp = require('fs-promise')
const co = require('co')
const util = require('./util')
module.exports = function (name) {
  co(function * () {
    const userTempPath = path.resolve(__dirname, '../user')
    const rmDir = path.resolve(userTempPath, name)
    console.log(rmDir)
    const isExist = yield util.ensureFile(rmDir)
    if (isExist) {
      yield fsp.remove(rmDir)
    } else {
      console.log(`不存在${name}模板`.error)
    }
  }).catch(console.log)
}
