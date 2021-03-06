module.exports = (dir, show = false) => {
  if (!dir) return
  const fs = require('fs')
  const chalk = require('chalk')
  const log = console.log
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
