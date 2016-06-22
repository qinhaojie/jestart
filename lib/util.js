
const readline = require('readline')

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

    let p = queList.reduce((promise, question) => {
        return promise.then(() => {
            return ask(question + '\n').then(answer => {
                answers.push(answer)
            })
        })
    }, Promise.resolve())

    return p.then(() => {
        rl.close()
        return answers
    })
}    
