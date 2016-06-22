#!/usr/bin/env node

var program = require('commander');

program.version('0.0.1')

program
    .command('help')
    .description('帮助')
    .action(function () {
        program.outputHelp();
    })

program
    .command('create [dir]')
    .description('create')
    .action(function (dir) {
        
    })

program.parse(process.argv)