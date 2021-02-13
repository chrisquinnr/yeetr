const chalk = require('chalk')
const log = console.log

module.exports = function (message, data) {
  log(chalk.white.bgRedBright(message))
  log(chalk.red.bgWhite(data))
}
