const userMid = require('./user.middleware');
const tokenAuth = require('./authToken.middleware');
const categoryMid = require('./category.middleware');
const blogPostMid = require('./blogPost.middleware');

module.exports = {
  userMid,
  tokenAuth,
  categoryMid,
  blogPostMid,
};