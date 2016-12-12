'use strict'
const path = require('path')
const fsp = require('fs-promise')
const co = require('co')
const util = require('./util')
module.exports = function () {
  co(function * () {
    const templatePath = path.resolve(__dirname, '../template')
    const userTempPath = path.resolve(__dirname, '../user')
    const isExist = yield util.ensureUserTemp()
    let uNames = []
    if (isExist) {
      uNames = yield fsp.readdir(userTempPath)
    }
    console.log('默认模板文件地址：'.prompt)
    console.log(templatePath.verbose)
    console.log('用户模板文件地址：'.prompt)
    console.log(userTempPath.verbose)
    const names = yield fsp.readdir(templatePath)
    console.log('模板列表：')
    for (let n of names.concat(uNames)) {
      console.log(`  ${n}`.info)
    }
  }).catch(console.log)
}
