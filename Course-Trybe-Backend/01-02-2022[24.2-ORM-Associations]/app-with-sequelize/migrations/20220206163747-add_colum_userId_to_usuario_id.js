'use strict';

module.exports = {
  async up (queryInterface, Sequelize) { //recebe 3 parâmetros ao criar uma nova coluna em uma tabela
    await queryInterface.addColumn('Users','userId',{
      type:Sequelize.INTEGER,
      references:{
        model:'Ususarios',
        key:'id',
      }
    }); // 1 tabela que vai recerber a coluna - 2 nome da nova coluna - 3 config da nova coluna

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'userId'); //
  }
};
