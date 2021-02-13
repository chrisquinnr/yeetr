const inquirer = require('inquirer')
const chalk = require('chalk')
const _ = require('lodash')
const search = require('./search')
const fileio = require('./fileio')
const axios = require('axios')
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
const log = console.log
module.exports = function (dir, expireTime) {
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
      log(`Uploading ${chalk.blue(answers.file)}...`)
      const { link, expiry } = await fileio(answers.file, expireTime)
      const msg = `Your file is available at ${chalk.green.bold.underline(
        link
      )} and will expire in ${chalk.green.bold(expiry)}`
      log(`${chalk.white.bgGreen('Success!')}`)
      log(`${chalk.green(msg)}`)
    })
}
