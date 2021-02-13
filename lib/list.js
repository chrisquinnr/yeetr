module.exports = function (dir) {
  console.log(dir)
  console.log('|  / |')
  console.log('------------------')

  const fs = require('fs')
  const chalk = require('chalk')
  const log = console.log

  const files = fs.readdirSync(dir)
  // for (const file of files) {
  //   log(chalk.blue(file))
  // }
  return files
}
