module.exports = () => {
  const dotenv = require('dotenv')
  const homedir = require('os').homedir()
  const error = require('./error')

  const configFile = '.yeetconfig'
  const compositePath = `${homedir}/${configFile}`
  const result = dotenv.config({ path: compositePath })
  if (result && result.parsed) {
    return result.parsed
  }
  return error('Could not locate user config file')
}
