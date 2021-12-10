const find = require('../../models/sales/find');

module.exports = async (_req, res, next) => {
  try {
    const list = await find();

    return res.status(200).json({
      sales: list, // retorna o array de vendas dentro de uma chave 'sales'
    });
  } catch (err) {
    next(err);
  }
};
