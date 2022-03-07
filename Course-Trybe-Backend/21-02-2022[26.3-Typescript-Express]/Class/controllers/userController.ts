import {Request, Response} from 'express';
import userService from '../service/userService';


const getaAll = async (re:Request, res:Response) =>{
  const users =  await userService.getaAll();
  res.status(200).json(users);
}

const create =  async (req:Request, res:Response) =>{
  const { username, email, password} = req.body;
  const newUser =  await userService.create({ username, email, password });
  res.status(201).json(newUser);
}

export default {
  getaAll,
  create,
}