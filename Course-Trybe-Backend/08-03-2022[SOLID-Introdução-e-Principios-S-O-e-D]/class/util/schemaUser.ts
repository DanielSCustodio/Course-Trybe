import Joi from "joi";

export default function (roles: string[]){
  return  Joi.object({
  username: Joi.string().required().min(5),
  email: Joi.string().required(),
  password: Joi.string().required().min(3),
  role: Joi.string().required().valid(...roles),  
  });
}