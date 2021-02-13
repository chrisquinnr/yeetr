#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const list = require('../lib/list')
const serve = require('../lib/serve')

program
  .command('list [dir]')
  .alias('ls')
  .description('List files')

  .action((dir = '.') => {
    list(dir, true)
  })

program
  .command('send [dir]')
  .alias('s')
  .description('Yeet something')

  .action((dir = '.') => {
    serve(list(dir))
  })

program.parse(process.argv)
