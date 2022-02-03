module.exports = (sequelize, DataTypes ) => {
  const Product = sequelize.define('Product',
  {
    name: DataTypes.STRING,
    description:DataTypes.STRING,
    price:DataTypes.DECIMAL,
  },
  {
    timestamps:false, // usar isso quando a tabela **não** tiver as colunas createdAt, updatedAt
    tableName: 'products' // se o nome da tabela for diferente do nome do model no plural usar esse parâmetro
  }); 
  return Product;
}
