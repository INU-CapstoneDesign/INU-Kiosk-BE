'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Restaurants',
      [
        {
          restaurantId: 1,
          restaurantName: '인천반점',
          restaurantCategory: '중식',
        },
        {
          restaurantId: 2,
          restaurantName: '인하김밥',
          restaurantCategory: '한식',
        },
        {
          restaurantId: 3,
          restaurantName: '싱싱초밥',
          restaurantCategory: '일식',
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Restaurants', null, {});
  }
};
