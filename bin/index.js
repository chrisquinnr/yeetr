#!/usr/bin/env node

const program = require('commander')
const list = require('../lib/list')
const send = require('../lib/send')
const error = require('../lib/error')
const courier = require('../lib/courier')
const config = require('../lib/config')

const { validExpiry } = require('../lib/helper')

program
  .arguments('[dir] [expiry]')
  .option('-f, --file <file>', 'direct path to file')
  .option('-e, --expiry <expiry>', 'expiry option')
  .option('-a, --at <at>', 'send to someone')
  .alias('s')
  .description('Yeet something')

  .action((dir = '.', expiry = '1d', options) => {
    if (!validExpiry(expiry)) {
      error('Invalid expiry token', expiry)
      return
    }
    send(list(dir), expiry, options)
  })
program
  .command('at <dest>')
  .description('yeet a file at someone')
  .action((dest) => {
    courier(dest)
  })

program
  .command('debug')
  .description('DEBUG')
  .action(() => {
    config()
  })
program.parse(process.argv)
