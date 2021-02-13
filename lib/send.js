const fs = require('fs')
module.exports = async function (file) {
  const axios = require('axios')
  const FormData = require('form-data')

  const form = new FormData()
  form.append('file', fs.createReadStream(file))
  return axios
    .post('https://file.io', form, {
      headers: form.getHeaders()
    })
    .then((result) => {
      const { link, expiry } = result.data
      return { link, expiry }
    })
}
