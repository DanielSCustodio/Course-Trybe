const { saleSchema } = require('../../util/validationSchemaSales');
const sendResponse = require('./responseError');
const { getId } = require('../../models/salesModel');
const { getById } = require('../../models/productsModel');

const saleNotFound = 'Sale not found';
const QuantityNotAllowed = 'Such amount is not permitted to sell';

const checkBody = async (req, res, next) => {
  try {
    const { quantity, product_id: productId } = req.body[0];
    await saleSchema.validateAsync({ productId, quantity });
  } catch (error) {
    const err = error.details[0];
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
  next();
};

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const result = await getId(id);
  if (!result) {
    const { status, message } = await sendResponse(saleNotFound);
    return res.status(status).json({ message });
  }
  next();
};

const checkQuantity = async (req, res, next) => {
  const products = req.body;
  await Promise.all(await products.map(async ({ product_id, quantity: quantitySale }) => {
    const { quantity } = await getById(product_id);
  
    if (quantity < 0) {
      const { status, message } = await sendResponse(QuantityNotAllowed);
      return res.status(status).json({ message });
    }

    if (quantity < quantitySale) {
      const { status, message } = await sendResponse(QuantityNotAllowed);
      return res.status(status).json({ message });
    }
}));
  
  next();
};

module.exports = {
  checkBody,
  checkId,
  checkQuantity,
};