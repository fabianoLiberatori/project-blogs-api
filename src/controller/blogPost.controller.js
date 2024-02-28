const { blogPostService, blogPost2Service } = require('../service');
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

const updatePost = async (req, res) => {
  const { userId } = res.locals;
  const { id } = req.params;
  const { title, content } = req.body;
  const { status, data } = await blogPost2Service.updatePost(userId, id, title, content);
  res.status(httpMap[status]).json(data);
};

const deletePost = async (req, res) => {
  const { userId } = res.locals;
  const { id } = req.params;
  const result = await blogPost2Service.deletePost(userId, id);
  if ('data' in result) {
    return res.status(httpMap[result.status]).json(result.data);
  }
  return res.status(httpMap[result.status]).end();
};

module.exports = {
  createNewBlogPost,
  getAllBlogPost,
  getByIdBlogPost,
  updatePost,
  deletePost,
};