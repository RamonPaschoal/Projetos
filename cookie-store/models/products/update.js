const connection = require('../connection');

module.exports = async (name, quantity, _token) => {
  const connect = (await connection())
    await connect.collection('products').updateOne(
      {
        name
      },
      {
        $set: { name, quantity }
      }
    )

    return { name, quantity }
}