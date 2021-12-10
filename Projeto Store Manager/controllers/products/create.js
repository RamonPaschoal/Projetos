const productService = require('../../services/products/create');

module.exports = async (req, res, next) => {
  try {
    const { name, quantity } = req.body; // passa name e quantity via corpo da requisição. 
    const { err, product } = await productService(name, quantity); // Extrai err e product (objeto retornado) do arquivo create.js da pasta products

    if (err) {
      return res.status(422).json({ err });
    } // Se alguma validação do service de criação de usuário não for atendida, irá ser retornado erro 422 e o objeto do erro. 
      
    return res.status(201).json(product);
  } catch (err) {
    next(err); // caso não nenhuma das ações informadas no try seja executada, retorna o erro através do middleware de erro. 
  }
};
