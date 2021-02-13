const inquirer = require('inquirer')
const chalk = require('chalk')
const _ = require('lodash')
const search = require('./search')

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
    .then(function (answers) {
      log(`Serving ${chalk.red(answers.file)}`)
    })
}
