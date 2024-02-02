const { Router } = require('express');
const { blogPostController } = require('../controller');
const { tokenAuth, blogPostMid } = require('../middleware');

const blogPostRouter = Router();

blogPostRouter
  .post(
    '/post',
    tokenAuth,
    blogPostMid.blogPostValid,
    blogPostController.createNewBlogPost,
  )
  .get('/post', tokenAuth, blogPostController.getAllBlogPost);

module.exports = blogPostRouter;