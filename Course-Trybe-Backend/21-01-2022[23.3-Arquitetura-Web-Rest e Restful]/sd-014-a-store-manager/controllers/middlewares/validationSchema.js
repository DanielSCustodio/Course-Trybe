/* consulta: https://www.youtube.com/watch?v=u9kxYilQ9l8 */
const joi = require('@hapi/joi');

const productSchema = joi.object({
  name: joi.string().min(5).required(),
  quantity: joi.number().min(1).required(),
});

module.exports = {
  productSchema,
};