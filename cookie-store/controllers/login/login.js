const loginService = require('../../service/login');
const { createToken } = require('../../middleware/token');

module.exports = async (req, res, next) => {
  try {
    const { user, password } = req.body;

    const response = await loginService(user, password)

    const token = createToken(response);

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message })
    }

    return res.status(200).json({ token })
  } catch (err) {
    next(err)
  }
}