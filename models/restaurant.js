'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {}

  // model 명은 Restaurant
  Restaurant.init({
    // restaurantId 컬럼 추가(type을 DataTypes.INTEGER로 변경해야 함)
    restaurantId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    restaurantName: DataTypes.STRING,
    restaurantCategory: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Restaurant',
  });

  // 레스토랑 - 메뉴 간의 일대다 관계 형성
  // FK로 연결하기(레스토랑 - 메뉴)
  Restaurant.associate = (models) => {
    Restaurant.hasMany(models.Menu, { foreignKey: 'restaurantId', as: 'menus' });
  };

  return Restaurant;
};
