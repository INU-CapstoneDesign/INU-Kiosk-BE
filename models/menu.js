'use strict';
const {
  Model,
} = require('sequelize');

const config = require('../config/config.json');

// Restaurant 모델을 import
const Restaurant = require('./restaurant.js');

module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {}

  // model명은 Menu
  Menu.init({
    // menuId 컬럼 추가(type을 DataTypes.INTEGER로 변경해야 함)
    menuId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    menuName: DataTypes.STRING,
    menuPrice: DataTypes.INTEGER,
    menuImage: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Menu',
  });
  
  // Menu 모델과 Restaurant 모델 간의 관계 설정
  Menu.associate = (models) => {
    Menu.belongsTo(models.Restaurant, { foreignKey: 'restaurantId', as: 'restaurants' }); // 변경된 부분
  };
  return Menu;
};