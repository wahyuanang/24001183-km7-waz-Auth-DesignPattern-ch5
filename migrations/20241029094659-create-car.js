"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Cars", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tahun: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      noPlat: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      harga: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      fotoMobil: {
        type: Sequelize.STRING,
      },
      createBy: {
        type: Sequelize.INTEGER,
      },
      updateBy: {
        type: Sequelize.INTEGER,
      },
      delete: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("current_timestamp"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("current_timestamp"),
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Cars");
  },
};
