module.exports = function (dir, show = false) {
  const fs = require('fs')
  const chalk = require('chalk')
  const log = console.log
  log(dir)
  const files = fs.readdirSync(dir)
  let list = []
  for (const file of files) {
    const path = `${dir}/${file}`
    try {
      if (fs.lstatSync(path).isDirectory()) {
        if (show) {
          const path = `${path}/`
          log(`${chalk.white.bgGreen(path)}`)
        }
      } else {
        if (show) log(chalk.blue(path))
        list.push(path)
      }
    } catch (e) {
      log(chalk.red(e))
    }
  }
  return list
}
