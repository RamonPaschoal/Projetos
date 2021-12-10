const connection = require('../connection');

module.exports = async () => {
  const connect = (await connection());
  const findSales = await connect.collection('sales').find().toArray(); // busca todos os dados do banco de dados 'sales' e coloca dentro de um array. 
  return findSales;
};