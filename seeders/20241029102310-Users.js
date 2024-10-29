'use strict';

/** @type {import('sequelize-cli').Migration} */

const  bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface, Sequelize) {
   const hashedPassword = await bcrypt.hash('wahyu', 10);
   return queryInterface.bulkInsert('Users',[
      {
        firstName: 'Wahyu',
        lastName: 'Anang',
        email: 'wahyu@example.com',
        password: hashedPassword,
        phone: '1234567890',
        photo: 'https://example.com/photo1.jpg',
        role: 'superadmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'kang',
        lastName: 'rantau',
        email: 'kang@example.com',
        password: hashedPassword,
        phone: '0814627391',
        photo: 'https://example.com/photo2.jpg',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'anak',
        lastName: 'rantau',
        email: 'rantau@example.com',
        password: hashedPassword,
        phone: '0812345678',
        photo: 'https://example.com/photo.jpg',
        role: 'member',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   ])
  },

  async down (queryInterface, Sequelize) {
   return queryInterface.bulkDelete('Users', null, {})
  }
};
