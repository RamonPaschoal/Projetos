const updateService = require('../../service/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, quantity } = req.body

    const auth = req.headers.authorization

    const response = await updateService(id, name, quantity, auth);

    if ('message' in response) {
      return res.status(response.code).json({ message: response.message })
    }

    return res.status(200).json(response);
  } catch (err) {
    next(err)
  }
}