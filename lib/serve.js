const inquirer = require('inquirer')
const chalk = require('chalk')

module.exports = function (dir) {
  const questions = [
    {
      type: 'list',
      name: 'file',
      message: 'Select file',
      choices: dir
    }
  ]
  const log = console.log
  inquirer.prompt(questions).then(function (answers) {
    log(`Serving ${chalk.red(answers.file)}`)
  })
}
