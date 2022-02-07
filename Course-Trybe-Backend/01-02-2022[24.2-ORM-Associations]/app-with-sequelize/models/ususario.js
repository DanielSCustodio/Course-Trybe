
module.exports = (sequelize, DataTypes) => {

  const Ususario=sequelize.define('Ususario',{
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  });
  return Ususario;
};