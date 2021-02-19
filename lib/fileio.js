module.exports = async function (file, expires) {
  const axios = require('axios')
  const fs = require('fs')
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

const buildRequestUrl = (expires) => {
  return `https://file.io/?expires=${expires}`
}
