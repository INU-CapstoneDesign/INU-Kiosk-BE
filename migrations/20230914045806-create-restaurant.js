'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    // MySQL에 저장되는 table 이름이 `Restaurants`
    await queryInterface.createTable('Restaurants', {
      restaurantId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurantName: {
        type: Sequelize.STRING,
      },
      restaurantCategory: {
        type: Sequelize.STRING,
      },
      // 생성된 데이터 자동으로 MySQL에 저장됨
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'), // 자동으로 컴퓨터가 그때 시간 저장해줌
      },
      // 수정된 데이터 자동으로 MySQL에 저장됨
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'), // 자동으로 컴퓨터가 그때 시간 저장해줌
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Restaurants');
  }
};