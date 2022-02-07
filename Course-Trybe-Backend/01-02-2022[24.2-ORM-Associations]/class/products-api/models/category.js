module.exports = (sequelize, DataTypes ) => {
  const Category = sequelize.define('Category',
  {
    name: DataTypes.STRING,
  },
  {
  }); 
  return Category;
};


//MODEL NO SINGULAR E TABELA NO PLURAL E OS DOIS UPCASE