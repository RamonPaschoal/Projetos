const { createHmac } = require('crypto')

module.exports = password => {
  if (typeof password !== 'string') return { code: 406, message: 'Password must be a string' };

  const hash = createHmac('sha256', password)
    .update(process.env.CRYPTO_KEY)
    .digest('hex');

  return hash
}