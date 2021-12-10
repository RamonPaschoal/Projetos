const ProductRemove = require('../../models/products/remove');

const ErrorWrongIdFormat = {
  err: { code: 'invalid_data', message: 'Wrong id format' },
};

module.exports = async (id) => {
  const removeById = await ProductRemove(id);

  if (!removeById) {
    return ErrorWrongIdFormat;
  } // caso o id não seja válido, retorna o objeto de erro,

  return removeById; // caso contrário, será retornado o objeto nulo. 
};