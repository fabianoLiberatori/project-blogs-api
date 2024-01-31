const jwt = require('jsonwebtoken');

const newToken = (payload) => jwt.sign(payload, process.env.JWT_SECRET, {
  expiresIn: '1d',
});

const tokenValidate = (token) => jwt.verify(token, process.env.JWT_SECRET);

module.exports = {
  newToken,
  tokenValidate,
};