const connection = require('../connection');

module.exports = async (itensSold) => {
  const connect = (await connection());
  const saleObj = await connect.collection('sales').insertOne({ itensSold });
  
  return { 
    _id: saleObj.insertedId,
    itensSold,
  }; // Inserimos o _id de saleObj e o objeto do corpo da requisição
};