const { blogPostService } = require('../service');
const httpMap = require('../utils/httpMapper');

const createNewBlogPost = async (req, res) => {
  const { userId } = res.locals;
  console.log(userId);
  const { status, data } = await blogPostService.createNewBlogPost(userId, req.body);
  res.status(httpMap[status]).json(data);
};

const getAllBlogPost = async (_reg, res) => {
  const { status, data } = await blogPostService.getAllBlogPost();
  res.status(httpMap[status]).json(data);
};

module.exports = {
  createNewBlogPost,
  getAllBlogPost,
};