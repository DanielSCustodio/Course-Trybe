'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProductTags', {
      productId: {
        type: Sequelize.INTEGER,
        primarykey:true,
        references:{
          model:'products', //nome da tabela e não do model
          key:'id',
        }
      },
      
      tagId: {
        type: Sequelize.INTEGER,
        primarykey: true,
        references: {
          model: 'Tags',
          key: 'id',
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },

      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ProductTags');
  }
};


//MODEL NO SINGULAR E TABELA NO PLURAL E OS DOIS UPCASE 