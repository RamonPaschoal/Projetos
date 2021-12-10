const updateService = require('../../services/products/update');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params; // id via rota
    const { name, quantity } = req.body; // name e quantity via corpo da requisição
    const { err, product } = await updateService(id, name, quantity); // extrai err e product do service de update

    if (err) {
      return res.status(422).json({ err });
    } // em caso de erro, retorna status 422 e o objeto de erro

    return res.status(200).json(product); // caso o update seja realizado retorna status 200 e o objeto do service de update.
  } catch (err) {
    next(err);
  }
};