const { BlogPostService } = require('../service');
const httpMap = require('../utils/httpMapper');

const createNewBlogPost = async (req, res) => {
  const { userId } = res.locals;
  console.log(userId);
  const { status, data } = await BlogPostService.createNewBlogPost(userId, req.body);
  res.status(httpMap[status]).json(data);
};

module.exports = {
  createNewBlogPost,
};