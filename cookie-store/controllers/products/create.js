const productCreate = require('../../service/create');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body;

    const auth = req.headers.authorization;

    const response = await productCreate(name, quantity, auth)

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message })
    }

    return res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}