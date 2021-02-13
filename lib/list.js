module.exports = function (dir, show = false) {
  const fs = require('fs')
  const chalk = require('chalk')
  const log = console.log

  const files = fs.readdirSync(dir)
  if (show) {
    for (const file of files) {
      log(chalk.blue(file))
    }
  }
  return files
}
