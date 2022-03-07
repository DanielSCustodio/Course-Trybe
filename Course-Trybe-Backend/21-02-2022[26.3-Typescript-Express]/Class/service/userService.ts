import { User } from "../interfaces/userInterface";
import userModel from "../models/userModel";

const getaAll = async ():Promise<User[]> =>{
  const users = await userModel.getaAll()
  return users;
}

const create = async (user: User) : Promise<User> => {
  const { username, email, password } = user;
  const newUser = await userModel.create({username, email, password });
  return newUser;
}


export default {
  getaAll,
  create
}