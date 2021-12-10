const productService = require('../../services/sales/create');

module.exports = async (req, res, next) => {
  try {
    const itensSold = req.body; // passa o array via corpo da requisição
    const { err, sales } = await productService(itensSold); // extrai o objeto de erro e o objeto das vendas cadastradas.

    if (err) {
      return res.status(422).json({ err });
    } // Em caso de erro, retornar status 422 e o objeto de erro
      
    return res.status(200).json(sales); // se não ocorrer nenhum erro, retorna status 200, e o objeto da venda realizada.
  } catch (err) {
    next(err);
  }
};
