const inquirer = require('inquirer')
const chalk = require('chalk')
const _ = require('lodash')
const search = require('./search')
const fileio = require('./fileio')
const axios = require('axios')
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
const log = console.log

module.exports = function (dir, expireTime, options) {
  if (options && options.file) {
    // If user using options
    sendHandler(options.file, options.expiry)
  } else {
    inquirer
      .prompt([
        {
          type: 'autocomplete',
          name: 'file',
          message: 'Select a file',
          source: function (answers, input) {
            return search(answers, input, dir)
          }
        }
      ])
      .then(async function (answers) {
        sendHandler(answers.file, expireTime)
      })
  }
}
async function sendHandler(file, expireTime) {
  log(`Uploading ${chalk.blue(file)}...`)
  const { link, expiry } = await fileio(file, expireTime)
  const msg = `Your file is available at ${chalk.green.bold.underline(
    link
  )} and will expire in ${chalk.green.bold(expiry)}`
  log(`${chalk.white.bgGreen(' YEET! ')}`)
  log(`${chalk.green(msg)}`)
}
