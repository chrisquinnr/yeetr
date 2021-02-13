const validExpiry = function (expiry) {
  let re = new RegExp('(\\d{1,2})([dymw])')
  return re.exec(expiry)
}

module.exports = {
  validExpiry
}
