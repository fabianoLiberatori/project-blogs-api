'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    underscored: true,
    timestamps: false,
  })

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'userId',
      as: 'userPosts'
    })
  }
  return User;
};