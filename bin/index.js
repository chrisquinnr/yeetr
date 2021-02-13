#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const list = require('../lib/list')
const send = require('../lib/send')
const error = require('../lib/error')
const { validExpiry } = require('../lib/helper')
program
  .command('list [dir]')
  .alias('ls')
  .description('List files')

  .action((dir = '.') => {
    list(dir, true)
  })

program
  .command('send [dir] [expiry]', { isDefault: true })
  .alias('s')
  .description('Yeet something')

  .action((dir = '.', expiry = '1d') => {
    if (!validExpiry(expiry)) {
      error('Invalid expiry token', expiry)
      return
    }
    send(list(dir), expiry)
  })

program.parse(process.argv)
