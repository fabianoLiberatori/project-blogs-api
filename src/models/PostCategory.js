'use strict';
const {
  Model
} = require('sequelize');
const BlogPost = require('./BlogPost');
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'postCategory',
    tableName: 'post_categories',
    underscored: true,
    timestamps: false,
  })

  PostCategory.associate = (model) => {
    model.Category.belongsToMany(model.BlogPost, {
      through: PostCategory,
      foreignKey: 'categoryId',
      as: 'postCategories',
      otherkey: 'postId'
    })

    model.BlogPost.belongsToMany(model.Category, {
      through: PostCategory,
      foreignKey: 'postId',
      as: 'blogCategories',
      otherKey: 'categoryId'
    })
  }
  
  return PostCategory;
};