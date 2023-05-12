'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('people', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      slug: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      native_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM,
        values: ['male', 'female'],
        allowNull: false
      },
      birthday: {
        type: Sequelize.DATE,
        allowNull: true
      },
      biography: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })

    await queryInterface.addConstraint('people', {
      type: 'unique',
      fields: ['slug'],
      name: 'UNIQUE_SLUG_PEOPLE'
    })

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('people')
  }
};
