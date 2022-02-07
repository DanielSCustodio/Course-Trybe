//Mapeamento
module.exports = (sequelize, DataTypes) => { //Informa que o relacionamento entre produtos e taga vai se dá através desse model(tabela)
  const ProductTag = sequelize.define('ProductTag', {}); // por serem chaves estrangeiras, elas são geradas automagicamente
 
 //Product ->Tags
  ProductTag.associate = (models) => {
    models.Product.belongsToMany(models.Tag, {
      through:ProductTag, //through = através de
      foreignKey:'productId',    //id da tabela que chama
      otherKey:'tagId', //id da tabela
      as: 'tags'
    });

    // Tags -> Product
    models.Tag.belongsToMany(models.Product,{
      through: ProductTag, //through = através de
      foreignKey: 'tagId',    //id da tabela que chama
      otherKey: 'productId', //id da tabela
    });
  }

  return ProductTag;
};




//MODEL NO SINGULAR E TABELA NO PLURAL E OS DOIS UPCASE