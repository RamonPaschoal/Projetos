const SalesFindById = require('../../models/sales/findById');

const ErrorWrongIdFormat = {
  err: { code: 'not_found', message: 'Sale not found' },
};

module.exports = async (id) => {
  const sale = await SalesFindById(id);

  if (!sale) {
    return ErrorWrongIdFormat;
  } // se o id não for válido, retorna o objeto de erro

  return { sale }; // se o id for encontrado, retorna o objeto referente ao id
};