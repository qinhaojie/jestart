const askByQuesList = require('../lib/util.js').askByQuesList

askByQuesList([
    '1','2','3'
]).then(a =>{
    console.log(a)
})
