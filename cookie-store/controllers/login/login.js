const loginService = require('../../service/login');
const { createToken } = require('../../middleware/token');
const encrypt = require('../../middleware/crypt')

module.exports = async (req, res, next) => {
  try {
    const { user, password } = req.body;
    
    const cryptedPassword = encrypt(password)

    if (typeof cryptedPassword === 'object') {
      return res.status(cryptedPassword.code).json({ message: cryptedPassword.message })
    };

    const response = await loginService(user, cryptedPassword)

    const token = createToken(response);

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message })
    }

    return res.status(200).json({ token })
  } catch (err) {
    next(err)
  }
}