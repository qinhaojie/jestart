const util = require('../lib/util.js')

util.askByQuesList([
    ['aaa','a'],['bbb','b'],['ccc','c']
]).then(a =>{
    console.log(a)
})

// util.copyDir('./lib','./aaa').then(()=>{
//     setTimeout(function() {
//         require('fs-promise').remove('./aaa')
//     }, 2000);
// })
