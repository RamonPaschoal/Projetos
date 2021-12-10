const SaleUpdate = require('../../models/sales/update');

const objErrors = {
  objErrorQuantity: {
    err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' },
  
  },
};

module.exports = async (id, itensSold) => {
  const sales = await SaleUpdate(id, itensSold);

  if (itensSold
    .find((item) =>
      item.quantity < 1 || typeof item.quantity !== 'number')
  ) return objErrors.objErrorQuantity; // verifica se o objeto possui o valor de quantidade maior que 1 e que seja um número. Se não for retorna o objeto de erro.

  return { sales }; // Se estiver correto, retorna o objeto da venda atualizada
};