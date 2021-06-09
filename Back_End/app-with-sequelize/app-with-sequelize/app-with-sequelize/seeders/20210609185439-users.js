'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users', 
  [
    {
      fullname: 'Raphael Caputo',
      email: 'Caputo@teste.com.br',
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      phone_num: '24981304732',
    },
    {
      fullname: 'Alair Caputo',
      email: 'caputo2@test.com',

      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      phone_num: '24981304731',

    },
  ], 
  
  
  {}),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};
