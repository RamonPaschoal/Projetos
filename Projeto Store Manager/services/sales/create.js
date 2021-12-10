const salesCreate = require('../../models/sales/create');

const objErrors = {
  objErrorQuantity: {
    err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' },
    },
};

module.exports = async (itensSold) => {
    // const validSale = itensSold
  //   .find((item) =>
  //     item.quantity < 1 || typeof item.quantity !== 'number'); // verifica se o objeto tem a quantidade é maior que 0 e é um número. 
  
  if (itensSold
    .find((item) =>
    item.quantity < 1 || typeof item.quantity !== 'number')
    ) return objErrors.objErrorQuantity; // Se a quantidade não for maior que 0 e não for um número, retorna o objeto de erro.

    const sales = await salesCreate(itensSold);

  return { sales };
};