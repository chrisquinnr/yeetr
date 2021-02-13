const inquirer = require('inquirer')
const chalk = require('chalk')
const _ = require('lodash')
const search = require('./search')
const send = require('./send')
const axios = require('axios')
inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))
const log = console.log
module.exports = function (dir) {
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
      console.log(`Serving ${chalk.red(answers.file)}`)
      const { link, expiry } = await send(answers.file)
      log(
        `Success! Your file is available at ${link} and will expire in ${expiry}`
      )
    })
}
