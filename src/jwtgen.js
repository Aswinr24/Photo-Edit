const crypto = require('crypto')

const generateRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length)
}

const JWT_SECRET = generateRandomString(32)

console.log('JWT Token Secret:', JWT_SECRET)
