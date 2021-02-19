module.exports = function (message, data) {
  const chalk = require('chalk')
  const log = console.log

  log(chalk.white.bgRedBright(message))
  log(chalk.red.bgWhite(data))
}
