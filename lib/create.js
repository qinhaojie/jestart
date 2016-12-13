'use strict'
const util = require('./util.js')
const path = require('path')
const fsp = require('fs-promise')
const co = require('co')

module.exports = function (name) {
  return co(function * () {
    let config = yield util.askByQuesList(
      [
                ['项目描述'.blue, 'description'],
                ['选择哪一个模板？'.blue, 'temp'],
                ['在哪里创建文件？'.blue, 'dest']
      ]
        )

    let cwd = process.cwd()
    let dest = path.resolve(cwd, config.dest || name || '')
    const isUserTempExist = yield util.ensureUserTemp(config.temp)
    let temp = isUserTempExist ? path.resolve(__dirname, '../user', config.temp) : path.resolve(__dirname, '../template', config.temp)
    const isTempExist = yield util.ensureFile(temp)
    if (!isTempExist) {
      console.log(config.temp.info, '模板不存在'.error)
      console.log('请输入jestart list查看可使用模板')
      return false
    }
    console.log('正在生成请稍后'.prompt)

    yield util.copyDir(temp, dest)
    try {
      let jsonFile = path.resolve(dest, 'package.json')
      let file = yield fsp.readJSON(jsonFile)
      file.name = name
      file.description = config.description
      yield fsp.writeJSON(jsonFile, file)
    } catch (e) {}
    console.log('生成成功'.info)
  }).catch(onerror)
}

function onerror (e) {
  console.log(e)
}
