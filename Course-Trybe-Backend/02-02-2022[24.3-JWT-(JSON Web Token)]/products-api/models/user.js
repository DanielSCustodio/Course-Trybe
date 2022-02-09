module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Product)
  }

  return User;
};

//MODEL NO SINGULAR E TABELA NO PLURAL E OS DOIS UPCASE