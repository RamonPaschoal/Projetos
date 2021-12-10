const removeService = require('../../services/products/remove');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { err } = await removeService(id);

    if (err) {
      return res.status(422).json({ err });
    }

    return res.status(200).end(); // se tudo ocorrer de forma correta, retorna status 200 e encerra o processo. 
  } catch (err) {
    next(err);
  }
};