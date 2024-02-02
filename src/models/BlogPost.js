'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const BlogPost = sequelize.define('BlogPost', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING,
  userId: {
    type: DataTypes.INTEGER,
    foreignKey: true
  },
  published: DataTypes.DATE,
  updated: DataTypes.DATE,
}, {
  sequelize,
  modelName: 'BlogPost',
  tableName: 'blog_posts',
  underscored: true,
  timestamps: false,
});

BlogPost.associate = (model) => {
  BlogPost.belongsTo(model.User, {
    foreignKey: 'userId',
    as: 'user'
  })
}

  return BlogPost;
};