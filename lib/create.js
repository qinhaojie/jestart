'use strict'
const util = require('./util.js')
const path = require('path')
const fsp = require('fs-promise')
const co = require('co')
require('colors')
module.exports = function (name) {
  return co(function * () {
    let config = yield util.askByQuesList(
      [
                ['describe this project'.blue, 'description'],
                ['what template do you choose'.blue, 'temp'],
                ['where do you want start the project ? default this dir'.blue, 'dest']
      ]
        )

    let cwd = process.cwd()
    let dest = path.resolve(cwd, config.dest)
    let temp = path.resolve(__dirname, '../template', config.temp)
    console.log('正在生成请稍后'.prompt)

    yield util.copyDir(temp, dest)
    let jsonFile = path.resolve(dest, 'package.json')
    let file = yield fsp.readJSON(jsonFile)
    file.name = name
    file.description = config.description
    yield fsp.writeJSON(jsonFile, file)
    console.log('生成成功'.info)
  }).catch(onerror)
}

function onerror (e) {
  console.log(e)
}
