const jwt = require('jsonwebtoken');
const SECRET = require('../config/secret');

const {
  User
} = require('../models');

const create = async ({username, password, email}) => {

  const user = await User.create({ username, password, email  });
  const token = jwt.sign(user.dataValues, SECRET, {
    algorithm: 'HS256',
    expiresIn: '1d'
  });
  return  {user, token};
}

module.exports = {
  create
}