'use strict';

module.exports = {
  async up(queryInterface,Sequelize) {// São passados 3 parâmteros para cira uma nova coluna em uma tabela
    await queryInterface.addColumn('products','userId',{ // 1:nome da tabela em que será inserida a nova coluna - 2: Nome da nova coluna: 3:Config da nova config
      type: Sequelize.INTEGER,
      references:{   //criação da chave estrangeira
        model: 'Users', //tabela referenciada
        key:'id' // coluna da tabalea referenciada
      }
    } 
      
      ); 
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('products', 'userId');
    
  }
};



//MODEL NO SINGULAR E TABELA NO PLURAL E OS DOIS UPCASE