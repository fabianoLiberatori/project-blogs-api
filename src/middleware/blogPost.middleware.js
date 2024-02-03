const joi = require('joi');

const inputBlogPost = joi.object({
  title: joi.string().required().min(1),
  content: joi.string().required().min(1),
  categoryIds: joi.array().required().min(1),
});

const inputUpdateBlogPost = joi.object({
  title: joi.string().required().min(1),
  content: joi.string().required().min(1),
});

const blogPostValid = (req, res, next) => {
  const newPost = inputBlogPost.validate(req.body);
  if (newPost.error) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

const updateBlogPostValid = (req, res, next) => {
  const updatePost = inputUpdateBlogPost.validate(req.body);
  if (updatePost.error) {
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  next();
};

module.exports = {
  blogPostValid,
  updateBlogPostValid,
};