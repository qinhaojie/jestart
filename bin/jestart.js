#!/usr/bin/env node

const program = require('commander')
const create = require('../lib/create.js')

program.version('0.0.1')

program
    .command('help')
    .description('帮助')
    .action(function () {
        program.outputHelp()
    })

program
    .command('create [name]')
    .description('the project name')
    .action(create)


program.parse(process.argv)