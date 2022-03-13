import {IUser} from '../models/IUser';
import Joi from'joi';
import User from '../models/User';
import { NextFunction, Request, Response } from 'express';

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  role: Joi.string().required().valid('admin','user'),
});


export default class UserController {

  public static async validateParams (req: Request, res: Response, next: NextFunction) {
    const {error} = userSchema.validate(req.body);
    if(error){
      return res.status(400).json({message: error.message})
    }
    next();
  }

  public static async createUser (req: Request, res: Response) {
    const {username, email, password, role} = req.body as IUser;    
    await User.create({username, email, password, role});
    res.status(200).json({message: 'Usuário criado com sucesso'})
  }
}
