const userMid = require('./user.middleware');
const tokenAuth = require('./authToken.middleware');
const categoryMid = require('./category.middleware');

module.exports = {
  userMid,
  tokenAuth,
  categoryMid,
};