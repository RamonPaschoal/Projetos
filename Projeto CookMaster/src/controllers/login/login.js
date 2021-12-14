const jwt = require('jsonwebtoken');
const serviceLogin = require('../../service/login/login');

const secret = 'senha123';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { err, findEmail } = await serviceLogin({ email, password });

    const token = jwt.sign({ data: findEmail }, secret, jwtConfig);
    
    if (err) {
      return res.status(401).json(err);
    }

    return res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
