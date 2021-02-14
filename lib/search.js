const inquirer = require('inquirer')
const fuzzy = require('fuzzy')

module.exports = function (answers, input, dir) {
  input = input || ''
  return new Promise(function (resolve) {
    var fuzzyResult = fuzzy.filter(input, dir)
    const results = fuzzyResult.map(function (el) {
      return el.original
    })

    results.splice(5, 0, new inquirer.Separator())
    results.push(new inquirer.Separator())
    resolve(results)
  })
}
