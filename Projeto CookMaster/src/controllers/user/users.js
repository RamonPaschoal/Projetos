const serviceUser = require('../../service/user/user');

module.exports = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const { err, errValid, dataUser } = await serviceUser({ name, email, password });

    if (err) {
      return res.status(400).json(err);
    }

    if (errValid) {
      return res.status(409).json(errValid);
    }

    return res.status(201).json({ user: dataUser });
  } catch (err) {
    next(err);
  }
};
