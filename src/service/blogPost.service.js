const { BlogPost, PostCategory, Category, User } = require('../models');

const createNewBlogPost = async (userId, post) => {
  const { title, content, categoryIds } = post;
  const allCategory = await Category.findAll();

  const categoryIsValid = allCategory.map((cat) => categoryIds.includes(cat.id));
  if (categoryIsValid.includes(false)) {
    return {
      status: 'BAD_REQUEST',
      data: { message: 'one or more "categoryIds" not found' },
    };
  }
  const published = new Date();
  const updated = new Date();

  const { dataValues } = await BlogPost.create({ userId, title, content, published, updated });

  await Promise.all(categoryIds.map((categoryId) => 
    PostCategory.create({ postId: dataValues.id, categoryId })));

  return {
    status: 'CREATED',
    data: dataValues,
  };
};

const getAllBlogPost = async () => {
  const allBlogPost = await BlogPost.findAll({ include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ],
  });
  return {
    status: 'OK',
    data: allBlogPost,
  };
};

module.exports = {
  createNewBlogPost,
  getAllBlogPost,
};