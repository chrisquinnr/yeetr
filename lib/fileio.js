const fs = require('fs')

module.exports = async function (file, expires) {
  const axios = require('axios')
  const FormData = require('form-data')

  const form = new FormData()
  form.append('file', fs.createReadStream(file))
  const url = buildRequestUrl(expires)
  return axios
    .post(url, form, {
      headers: form.getHeaders()
    })
    .then((result) => {
      const { link, expiry } = result.data
      return { link, expiry }
    })
}
function buildRequestUrl(expires) {
  return `https://file.io/?expires=${expires}`
}
