'use strict'
const path = require('path')
const fsp = require('fs-promise')
const co = require('co')
module.exports = function () {
  co(function * () {
    const templatePath = path.resolve(__dirname, '../template')
    const names = yield fsp.readdir(templatePath)
    for (let n of names) {
      console.log(`  ${n}`)
    }
  }).catch(console.log)
}
