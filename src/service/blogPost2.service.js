const { BlogPost, Category, User } = require('../models');

const updatePost = async (userId, id, title, content) => {
  const postUser = await BlogPost.findByPk(id);
  if (userId !== postUser.id) {
    return {
      status: 'UNAUTHORIZED',
      data: {
        message: 'Unauthorized user',
      },
    };
  }

  await BlogPost.update({ title, content }, { where: { id } });
  const oneBlogPost = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories' },
  ],
  });

  return { status: 'OK', data: oneBlogPost };
};

const deletePost = async (userId, id) => {
  const postUser = await BlogPost.findByPk(id);
  if (!postUser) {
    return { status: 'NOT_FOUND',
      data: {
        message: 'Post does not exist',
      },
    };
  }
  if (userId !== postUser.userId) {
    return {
      status: 'UNAUTHORIZED',
      data: {
        message: 'Unauthorized user',
      },
    };
  }
  await BlogPost.destroy({ where: { id } });
  return { status: 'NO_CONTENT', data: null };
};

module.exports = {
  updatePost,
  deletePost,
};