const ProductCreate = require('../../models/products/create');
const ProductFindByName = require('../../models/products/findByName');

const objErrors = {
  objErrorNameLength: { 
    err: { code: 'invalid_data', message: '"name" length must be at least 5 characters long' },
  },
  objErrorQuantity: {
    err: { code: 'invalid_data', message: '"quantity" must be larger than or equal to 1' },
  
  },
  objErrorTypeofNumber: {
    err: { code: 'invalid_data', message: '"quantity" must be a number' },
  },
  objErrorProductIsEqual: {
    err: { code: 'invalid_data', message: 'Product already exists' },
  },
}; // objeto de validação do requisito

module.exports = async (name, quantity) => {
  if (name.length < 5) return objErrors.objErrorNameLength; // parâmetro name precisa ter mais que 5 caracteres

  if (quantity < 1) return objErrors.objErrorQuantity; // parâmetro quantity pracisa ser maior que 0;

  if (typeof quantity !== 'number') return objErrors.objErrorTypeofNumber; // parâmetro quantity precisa ser um número

  const findByName = await ProductFindByName(name);
  if (findByName) return objErrors.objErrorProductIsEqual; // se o parâmetro name já existir no banco de dados, retorna 

  const product = await ProductCreate(name, quantity); // Cria o objeto com name, quantity e _id no banco de dados;
  
  return { product }; // retorna o objeto
};