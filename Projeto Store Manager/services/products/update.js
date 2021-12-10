const ProductUpdate = require('../../models/products/update');

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
};

module.exports = async (id, name, quantity) => {
  if (name.length < 5) return objErrors.objErrorNameLength; 

  if (quantity < 1) return objErrors.objErrorQuantity;

  if (typeof quantity !== 'number') return objErrors.objErrorTypeofNumber;

  const product = await ProductUpdate(id, name, quantity); // Executa o model de update. 

  return { product }; // retorna o objeto do model de update
};