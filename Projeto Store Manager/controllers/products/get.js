const findById = require('../../services/products/findById');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params; // declaramos que o id será passado via rota.
    const { err } = await findById(id);

    const product = await findById(id); // executa o arquivo findById passando como parâmetro o id da rota
      
    if (err) {
      res.status(422).json({ err }); // em caso de erro, retorna status 422 e o objeto do erro.
    } 

    return res.status(200).json(product); // retorna status 200 e o objeto encontrado através do id.
  } catch (err) {
    next(err);
  }
};