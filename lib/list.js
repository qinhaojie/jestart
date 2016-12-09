'use strict'
const path = require('path')
const fsp = require('fs-promise')
const co = require('co')
const colors = require('colors')
module.exports = function () {
  co(function * () {
    const templatePath = path.resolve(__dirname, '../template')
    console.log('模板文件地址：'.prompt, templatePath.verbose)
    const names = yield fsp.readdir(templatePath)
    for (let n of names) {
      console.log(`\t${n}`.info)
    }
  }).catch(console.log)
}
