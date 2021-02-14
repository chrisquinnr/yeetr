#!/usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
const list = require('../lib/list')
const send = require('../lib/send')
const error = require('../lib/error')
const { validExpiry } = require('../lib/helper')

program
  .arguments('[dir] [expiry]')
  .option('-f, --file <file>', 'direct path to file')
  .option('-e, --expiry <expiry>', 'expiry option')
  .alias('s')
  .description('Yeet something')

  .action((dir = '.', expiry = '1d', options) => {
    if (!validExpiry(expiry)) {
      error('Invalid expiry token', expiry)
      return
    }
    send(list(dir), expiry, options)
  })

program.parse(process.argv)
