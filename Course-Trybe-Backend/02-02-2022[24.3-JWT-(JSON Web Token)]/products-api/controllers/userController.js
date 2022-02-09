const router = require('express').Router();
const rescue = require('express-rescue');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const { validateWithJoi } = require('./utils/joi');
const { User  } = require('../models');


const userSchema =Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
});

router.post('/', async (req, res) => {
const { username, password, email } = req.body;

validateWithJoi(userSchema, req.body)

const user = await User.create({username, password, email});
/* const token = jwt.sign(user, 'secret',{
  algorithm:'HS256',
  expiresIn:'1d'
});
res.status(201).json(user, token) */

});


module.exports = router;