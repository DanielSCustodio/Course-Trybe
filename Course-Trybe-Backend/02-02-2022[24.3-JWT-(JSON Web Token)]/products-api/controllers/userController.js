const router = require('express').Router();
const rescue = require('express-rescue');
const userService = require('../services/userService');
const Joi = require('joi');
const {
  validateWithJoi
} = require('./utils/joi');



const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

router.post('/', async (req, res) => {
  validateWithJoi(userSchema, req.body)
  const {user, token} = await userService.create(req.body);
  res.status(201).json({user, token})
});


module.exports = router;