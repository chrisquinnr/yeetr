module.exports = async (payload) => {
  const chalk = require('chalk')
  const fileio = require('./fileio')
  const courier = require('./courier')

  const log = console.log

  const { file, expiry, at } = payload

  log(`Uploading ${chalk.blue(file)}...`)
  const { link, expiry: expireTime } = await fileio(file, expiry)

  const msg = `Your file is available at ${chalk.green.underline(
    link
  )} and will expire in ${chalk.green.underline(expireTime)}`

  log(`${chalk.white.bgGreen('┌──────────────┐')}`)
  log(`${chalk.white.bgGreen('│  >> YEET! << │')}`)
  log(`${chalk.white.bgGreen('└──────────────┘')}`)
  log(msg)
  if (at) {
    courier(at, link)
  }
  return link
}
