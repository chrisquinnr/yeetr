module.exports = (dir, expireTime, options) => {
  const inquirer = require('inquirer')
  const search = require('./search')
  const upload = require('./upload')
  inquirer.registerPrompt(
    'autocomplete',
    require('inquirer-autocomplete-prompt')
  )

  if (options && options.file) {
    upload(options)
  } else {
    inquirer
      .prompt([
        {
          type: 'autocomplete',
          name: 'file',
          message: 'Select a file',
          source: function (answers, input) {
            return search(answers, input, dir)
          }
        }
      ])
      .then((answers) => {
        return upload({
          file: answers.file,
          expiry: expireTime
        })
      })
  }
}
