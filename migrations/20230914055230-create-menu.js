'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {

    // MySQL에 저장되는 table 이름이 `Menus`
    await queryInterface.createTable('Menus', {
      menuId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menuName: {
        type: Sequelize.STRING
      },
      menuPrice: {
        type: Sequelize.INTEGER
      },
      menuImage: {
        type: Sequelize.STRING
      },
      // 레스토랑 - 메뉴 외래키 생성하기
      restaurantId: {
        type: Sequelize.INTEGER, // 외래 키
        references: {
          model: 'Restaurants', // 레스토랑 테이블 참조
          key: 'restaurantId' // 레스토랑 테이블의 기본 키
        },
        onUpdate: 'CASCADE', // 레스토랑 레코드가 업데이트될 때 메뉴 레코드도 업데이트
        onDelete: 'CASCADE' // 레스토랑 레코드가 삭제될 때 메뉴 레코드도 삭제
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
    await queryInterface.dropTable('Menus');
  }
};