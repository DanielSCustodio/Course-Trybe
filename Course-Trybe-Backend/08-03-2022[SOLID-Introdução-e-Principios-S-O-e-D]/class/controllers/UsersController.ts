import {IUser} from '../models/IUser';
import builSchemas from '../util/schemaUser'
import User from '../models/User';
import { NextFunction, Request, Response } from 'express';



export default class UserController {

  public static async validateParams (req: Request, res: Response, next: NextFunction) {
    const userSchema = builSchemas(['admin','user']);
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
