#!/usr/bin/env node

const program = require('commander')


program.version('0.0.1')

program
    .command('help')
    .description('帮助')
    .action(function () {
        program.outputHelp()
    })

program
    .command('create [dir]')
    .description('create')
    .action(function (dir) {
        console.log('create')
    })


program.parse(process.argv)