module.exports = (err, _req, res, _next) => {
  console.error(err.message);
  console.error(err);
  res.status(500).end();
};
