'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert(
      // Menus 테이블에 데이터 삽입하기 -> menuId: 1 - menuId: 9까지의 데이터 삽입하기
      // 일단...노션에 정리된것들로만 데이터 작성 했습니다.
      'Menus',
      [
        {
          menuId: 1,
          menuName: '짜장면',
          menuPrice: 8000,
          menuImage: "food1.png",
          restaurantId: 1,
        },
        {
          menuId: 2,
          menuName: '짬뽕',
          menuPrice: 8000,
          menuImage: "food2.png",
          restaurantId: 1,
        },
        {
          menuId: 3,
          menuName: '탕수육',
          menuPrice: 14000,
          menuImage: "food3.png",
          restaurantId: 1,
        },
        {
          menuId: 4,
          menuName: '김밥',
          menuPrice: 3500,
          menuImage: "food4.png",
          restaurantId: 2,
        },
        {
          menuId: 5,
          menuName: '제육김밥',
          menuPrice: 5500,
          menuImage: "food5.png",
          restaurantId: 2,
        },
        {
          menuId: 6,
          menuName: '컵라면',
          menuPrice: 2000,
          menuImage: "food6.png",
          restaurantId: 2,
        },
        {
          menuId: 7,
          menuName: '새우초밥',
          menuPrice: 5500,
          menuImage: "food7.png",
          restaurantId: 3,
        },
        {
          menuId: 8,
          menuName: '연어초밥',
          menuPrice: 8500,
          menuImage: "food8.png",
          restaurantId: 3,
        },
        {
          menuId: 9,
          menuName: '참치초밥',
          menuPrice: 9000,
          menuImage: "food9.png",
          restaurantId: 3,
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Menus', null, {});
  }
};
