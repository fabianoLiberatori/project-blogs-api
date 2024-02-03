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
  .put(
    '/post/:id',
    tokenAuth,
    blogPostMid.updateBlogPostValid,
    blogPostController.updatePost,
  )
  .get('/post', tokenAuth, blogPostController.getAllBlogPost)
  .get('/post/:id', tokenAuth, blogPostController.getByIdBlogPost)
  .delete('/post/:id', tokenAuth, blogPostController.deletePost);

module.exports = blogPostRouter;