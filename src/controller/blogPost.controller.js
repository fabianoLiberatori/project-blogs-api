const { blogPostService } = require('../service');
const httpMap = require('../utils/httpMapper');

const createNewBlogPost = async (req, res) => {
  const { userId } = res.locals;
  console.log(userId);
  const { status, data } = await blogPostService.createNewBlogPost(userId, req.body);
  res.status(httpMap[status]).json(data);
};

const getAllBlogPost = async (_req, res) => {
  const { status, data } = await blogPostService.getAllBlogPost();
  res.status(httpMap[status]).json(data);
};

const getByIdBlogPost = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await blogPostService.getByIdBlogPost(id);
  res.status(httpMap[status]).json(data);
};

module.exports = {
  createNewBlogPost,
  getAllBlogPost,
  getByIdBlogPost,
};