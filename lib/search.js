const inquirer = require('inquirer')
const fuzzy = require('fuzzy')

module.exports = function (answers, input, dir) {
  input = input || ''
  return new Promise(function (resolve) {
    var fuzzyResult = fuzzy.filter(input, dir)
    const results = fuzzyResult.map(function (el) {
      return el.original
    })
    resolve(results)
  })
}
