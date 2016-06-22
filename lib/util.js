
const readline = require('readline')
const co = require('co')
exports.askByQuesList = askByQuesList



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

    let answers = []

    return co(function* () {
        let answer
        for (let question of queList) {

            answer = yield ask(question+':\n')
            answers.push(answer)
        }
        rl.close()
        return answers
    }).catch(e => {
        throw e
    })

}

