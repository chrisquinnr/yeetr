module.exports = (answers, input, dir) => {
  const fuzzy = require('fuzzy')

  input = input || ''
  return new Promise(function (resolve) {
    var fuzzyResult = fuzzy.filter(input, dir)
    const results = fuzzyResult.map(function (el) {
      return el.original
    })
    resolve(results)
  })
}
