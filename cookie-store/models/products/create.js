const connection = require('../connection');

module.exports = async (name, quantity, _token) => {
  const product = (await connection());
  const productObj = await product.collection('products').insertOne({ name, quantity });
  
  return {
    _id: productObj.insertedId,
    name,
    quantity,
  };
};