const { getByName } = require('../../models/productsModel');
const { getById } = require('../../models/productsModel');
const { productSchema } = require('../../util/validationSchemaProducts');
const sendResponse = require('./responseError');

const ProductExists = 'Product already exists';
const ProductNotFound = 'Product not found';

const checkName = async (req, res, next) => {
  const { name } = req.body;
  const [result] = await getByName(name);
  if (result) {
    const { status, message } = await sendResponse(ProductExists);
    return res.status(status).json({ message });
  }
  next(); 
};

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const result = await getById(id);
  if (!result) {
    const { status, message } = await sendResponse(ProductNotFound);
    return res.status(status).json({ message });
  }
  next();
};

const checkBody = async (req, res, next) => {
  try {
    await productSchema.validateAsync(req.body);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
  next();
};

module.exports = {
  checkName,
  checkId,
  checkBody,
};