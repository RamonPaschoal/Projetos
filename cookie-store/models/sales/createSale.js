const connection = require('../connection');

module.exports = async (name, qtd) => {
  const connect = (await connection());
  const createSale = await connect.collection('products').updateOne(
    {
      name
    },
    { 
      $inc: {
        quantity: - qtd
      }
    }
  )

  return createSale;
}