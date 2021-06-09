'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.addColumn('Users', 'phone_num', {
    type: Sequelize.STRING,
    id_phone: Sequelize.INTERGER,
  })
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn('Users', 'phone_num');
  }
};
