import mongoose from 'mongoose';
import IProfile from '../interfaces/IProfile';
import GenericDAO from './GenericDAO';

mongoose.connect('mongodb://localhost:27017/InstaTrybeT14');

const ProfileSchema = new mongoose.Schema<IProfile>({
/*   username: String, //continua funcionando, não é necessário esse trecho de código
  followers: Number,
  following: Number, */ 
});

export default class ProfileDAO extends GenericDAO<IProfile> {
  constructor() {
    super(mongoose.model('Profile', ProfileSchema));
  }
}