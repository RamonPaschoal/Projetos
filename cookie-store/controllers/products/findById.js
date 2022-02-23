const findProductByIdService = require('../../service/findById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const auth = req.headers.authorization;

    const response  = await findProductByIdService(id, auth);

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message })
    }

    return res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}