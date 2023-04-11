'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = [
      {
        "id": 1,
        "username": "admin1",
        "email": "admin@mail.com",
        "password": "123456",
        "phoneNumber": "081234567898",
        "address": "Jakarta"
      },
      {
        "username": "Maximo",
        "email": "maximo@mail.com",
        "password": "123456",
        "phoneNumber": "012345678912",
        "address": "Bekasi",
        "id": 2
      }
    ]

    let users = data.map(el => {
      delete el.id
      el.password = bcrypt.hashSync(el.password, 10)
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })

    await queryInterface.bulkInsert('Users', users)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
