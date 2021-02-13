function search(answers, input) {
  input = input || ''
  return new Promise(function (resolve) {
    setTimeout(function () {
      var fuzzyResult = fuzzy.filter(input, states)
      const results = fuzzyResult.map(function (el) {
        return el.original
      })

      results.splice(5, 0, new inquirer.Separator())
      results.push(new inquirer.Separator())
      resolve(results)
    }, _.random(30, 500))
  })
}
