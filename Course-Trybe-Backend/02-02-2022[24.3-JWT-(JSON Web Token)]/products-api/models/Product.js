module.exports = (sequelize, DataTypes ) => {
  const Product = sequelize.define('Product',
  {
    name: DataTypes.STRING,
    description:DataTypes.STRING,
    price:DataTypes.DECIMAL,
    userId: DataTypes.INTEGER
  } ,
  {
    timestamps:false, // usar isso quando a tabela **não** tiver as colunas createdAt, updatedAt
    tableName: 'products' // se o nome da tabela for diferente do nome do model no plural usar esse parâmetro
  }); 

  Product.associate = (models) => {
    Product.belongsTo(models.User,{foreignKey: 'userId',as: 'user'});// diz que product pertence a user
  }
  return Product;
}


//MODEL NO SINGULAR E TABELA NO PLURAL E OS DOIS UPCASE