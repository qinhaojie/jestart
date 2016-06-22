
const readline = require('readline')
const co = require('co')
const fsp = require('fs-promise')
exports.askByQuesList = askByQuesList
exports.copyDir = copyDir


/**
 * 复制某个目录到另一个目录
 * 
 * @param {String} source 来源 
 * @param {String} dest 目标
 * @returns {Promise}
 */
function copyDir(source,dest) {
    return co(function *() {
        yield fsp.ensureDir(dest)
        yield fsp.copy(source,dest)
    }).catch(e=>{
        throw e
    })
}


/**
 * 在命令行中根据问题列表获取参数
 * 
 * @param {Array} queList 问题列表
 * @returns {Promise}  
 */
function askByQuesList(queList) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let ask = function (question) {
        return new Promise((resolve, reject) => {

            rl.question(question, (answer) => {
                resolve(answer)
            })

        })
    }

    const isString = typeof queList[0] === 'string'
    let answers = isString ?　[]:{}
    return co(function* () {
        let answer
        for (let question of queList) {
            let ques = isString ? question : question[0]
            answer = yield ask(ques+':\n')
            if(isString){
                answers.push(answer)
            }else{
                answers[question[1]] = answer
            }
        }
        rl.close()
        return answers
    }).catch(e => {
        throw e
    })

}

