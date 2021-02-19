module.exports = async function (dest, file) {
  const chalk = require('chalk')
  const log = console.log
  const environment = require('./config')
  const config = environment()
  log(`...sending the link to ${chalk.green(dest)}...`)
  if (config.ENABLE_EMAIL) {
    const { CourierClient } = require('@trycourier/courier')
    const courier = CourierClient({
      authorizationToken: config.AUTHORIZATION_TOKEN
    })
    const { messageId } = await courier.send({
      eventId: config.EVENT_ID,
      recipientId: config.RECIPIENT_ID,
      data: {
        file
      },
      profile: {
        email: dest
      }
    })
    const msg = `${chalk.bgGreen.bold.white(
      'Sent!'
    )} Confirmation id: ${chalk.green(messageId)}`
    log(msg)
  } else {
    const error = require('./error')
    error('No email settings enabled!')
  }
}
