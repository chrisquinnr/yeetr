const validExpiry = (expiry) => {
  let re = new RegExp('(\\d{1,2})([dymw])')
  return re.exec(expiry)
}

const validEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

module.exports = {
  validExpiry,
  validEmail
}
