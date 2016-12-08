const path = require('path')
const fsp = require('fs-promise')
const co = require('co')
module.exports = function () {
  co(function * () {
    const templatePath = path.resolve(process.cwd(), './template')
    const names = yield fsp.readdir(templatePath)
    for (let n of names) {
      console.log(`  ${n}`)
    }
  })
}
