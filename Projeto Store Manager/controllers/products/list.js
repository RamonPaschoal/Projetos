const find = require('../../models/products/find');

module.exports = async (_req, res, next) => {
  try {
    const list = await find();

    return res.status(200).json({
      products: list, // declaro um objeto com chave 'products' que vai retornar o array retornado no arquivo find.js, que retorna todos os objetos cadastrados no banco de dados.
    });
  } catch (err) {
    next(err);
  }
};
