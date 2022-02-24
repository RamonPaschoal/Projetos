const loginListService = require('../../service/loginList');

module.exports = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    const response = await loginListService(auth)

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message })
    }

    return res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}