'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {}

  Menu.init({
    menuId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    menuName: DataTypes.STRING,
    menuPrice: DataTypes.INTEGER,
    menuImg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};