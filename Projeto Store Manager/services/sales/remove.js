const SaleRemove = require('../../models/sales/remove');

const ErrorWrongIdFormat = {
  err: { code: 'invalid_data', message: 'Wrong sale ID format' },
};

module.exports = async (id) => {
  const removeById = await SaleRemove(id);

  if (!removeById) {
    return ErrorWrongIdFormat;
  } // Se o id informado não existire retorna o objeto de erro.

  return removeById;
};