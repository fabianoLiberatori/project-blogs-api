'use strict';
const {
  Model, DATE
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
const BlogPosts = sequelize.define('BlogPost', {
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
  modelName: 'BlogPosts',
  tableName: 'blog_posts',
  underscored: true,
  timestamps: false,
});

BlogPosts.associate = (models) => {
  BlogPosts.belongsTo(models.User, {
    foreignKey: 'userId',
    as: 'User'
  })
}

  return BlogPosts;
};