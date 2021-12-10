const ProductFindById = require('../../models/products/findById');

const ErrorWrongIdFormat = {
  err: { code: 'invalid_data', message: 'Wrong id format' },
};

module.exports = async (id) => {
  const findById = await ProductFindById(id); // executa o model do findById

  if (!findById) {
    return ErrorWrongIdFormat; // caso o Id não seja válido, retorna objeto de erro. 
  }

  return findById; // Caso contrário, retorna o objeto que receba o id
};