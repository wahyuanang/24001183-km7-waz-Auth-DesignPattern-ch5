"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Cars", [
      {
        name: 'Toyota Camry',
        tahun: '2020',
        noPlat: 'B1234XYZ',
        harga: '300000000',
        fotoMobil: 'url_to_image_camry',
        createBy: 1,
        updateBy: 1,
        deleteBy: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Honda Civic',
        tahun: '2019',
        noPlat: 'B5678ABC',
        harga: '200000000',
        fotoMobil: 'url_to_image_civic',
        createBy: 1,
        updateBy: 1,
        deleteBy: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nissan X-Trail',
        tahun: '2018',
        noPlat: 'B9101DEF',
        harga: '180000000',
        fotoMobil: 'url_to_image_xtrail',
        createBy: 1,
        updateBy: 1,
        deleteBy: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mitsubishi Pajero',
        tahun: '2021',
        noPlat: 'B1122GHI',
        harga: '450000000',
        fotoMobil: 'url_to_image_pajero',
        createBy: 1,
        updateBy: 1,
        deleteBy: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Toyota Fortuner',
        tahun: '2022',
        noPlat: 'B1314JKL',
        harga: '350000000',
        fotoMobil: 'url_to_image_fortuner',
        createBy: 1,
        updateBy: 1,
        deleteBy: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Cars", null, {});
  },
};
