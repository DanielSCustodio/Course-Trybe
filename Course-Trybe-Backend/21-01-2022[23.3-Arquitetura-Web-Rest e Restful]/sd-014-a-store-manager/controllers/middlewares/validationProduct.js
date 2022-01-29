const { getByname } = require('../../models/productsModel');
const { getById } = require('../../models/productsModel');

const checkName = async (req, res, next) => {
  const { name } = req.body;
  const [result] = await getByname(name);
  if (result) {
    return res.status(409).json({ message: 'Product already exists' });
  }
  next(); 
};

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const result = await getById(id);
  if (!result) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  checkName,
  checkId,
};