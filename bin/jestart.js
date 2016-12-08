#!/usr/bin/env node
'use strict'
const program = require('commander')
const create = require('../lib/create.js')
const list = require('../lib/list')
program.version('0.2.2')

program
    .command('help')
    .description('帮助')
    .action(function() {
      program.outputHelp()
    })

program
    .command('create [name]')
    .description('the project name')
    .action(create)
program
    .command('list')
    .description('list all template')
    .action(list)
program.parse(process.argv)
