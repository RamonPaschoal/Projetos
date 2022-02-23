const listService = require('../../service/findProduscts');

module.exports = async (req, res, next) => {
  try {
    const auth = req.headers.authorization;

    const response = await listService(auth);

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message })
    }

    return res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}