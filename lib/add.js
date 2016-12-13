'use strict'
const path = require('path')
const cwd = process.cwd()
const co = require('co')
const fsp = require('fs-promise')
module.exports = function (file, options) {
  return co(function * () {
    const fileDir = path.resolve(cwd, file)
    const userDir = path.resolve(__dirname, '../user')
    const name = options.tname || fileDir.match(/[\/\\](\w+)$/)[1]
    const dest = path.resolve(userDir, name)
    try {
      let stat = yield fsp.stat(dest)
      if (options.force !== true) {
        console.log(name.info, `模板已存在，如需覆盖请加-f`)
        process.exit(0)
      }
    } catch (error) {}
    yield fsp.copy(fileDir, dest)
  }).catch(e => {
    console.log(e)
  })
}
