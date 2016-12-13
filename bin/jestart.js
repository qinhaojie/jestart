#!/usr/bin/env node
'use strict'
const program = require('commander')
const create = require('../lib/create.js')
const list = require('../lib/list')
const add = require('../lib/add')
require('../lib/color')()
program.version(require('../package.json').version)

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
program
  .command('list')
  .description('list all template')
  .action(list)

program
  .command('add <file>')
  .option('-n, --tname <name>', '模板名')
  .option('-f, --force', '覆盖')
  .description('添加项目模板文件')
  .action(add)
program.parse(process.argv)
