'use strict'
const path = require('path')
const fsp = require('fs-promise')
const co = require('co')
const util = require('./util')
module.exports = function (options) {
  co(function * () {
    const templatePath = path.resolve(__dirname, '../template')
    const userTempPath = path.resolve(__dirname, '../user')
    const isExist = yield util.ensureUserTemp()
    let uNames = []
    if (isExist) {
      uNames = yield fsp.readdir(userTempPath)
    }
    const names = yield fsp.readdir(templatePath)
    console.log('模板列表：')
    let list = []
    if (options.default === true) {
      list = list.concat(names)
    }
    if (options.user === true) {
      list = list.concat(uNames)
    }
    if (options.default === undefined && options.user === undefined) {
      list = names.concat(uNames)
    }
    for (let n of list) {
      console.log(`  ${n}`.info)
    }
  }).catch(console.log)
}
