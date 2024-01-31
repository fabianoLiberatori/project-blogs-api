const userMid = require('./user.middleware');
const tokenAuth = require('./authToken.middleware');

module.exports = {
  userMid,
  tokenAuth,
};