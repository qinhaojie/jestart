const util = require('./util.js')
const path = require('path')
module.exports = function (name) {
    util.askByQuesList(
        [
            ['what template do you choose','temp'],
            ['where do you want start the project ? default this dir','dest']
        ]
    ).then(config=>{
        let cwd = process.cwd()
        let dest = path.resolve(cwd,config.dest)
        let temp = path.resolve(__dirname,'../template',config.temp)
        console.log(dest)
        console.log(temp)
        console.log('正在生成请稍后')

        return util.copyDir(temp,dest)
    }).then(()=>{
        console.log('请输入npm install 安装依赖')
    })
}