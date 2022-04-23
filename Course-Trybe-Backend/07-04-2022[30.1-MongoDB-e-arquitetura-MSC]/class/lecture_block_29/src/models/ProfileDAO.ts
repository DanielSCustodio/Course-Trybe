import mongoose from 'mongoose';
import IProfile from '../interfaces/IProfile';

mongoose.connect('mongodb://localhost:27017/InstaTrybeT14');

const ProfileSchema = new mongoose.Schema<IProfile>({
/*   username: String, //continua funcionando, não é necessário esse trecho de código
  followers: Number,
  following: Number, */
});

export default class ProfileDAO {
  public model;

  constructor() {
    this.model = mongoose.model('Profile', ProfileSchema);
  }

  public async read(): Promise<IProfile[]> {
    const profiles = await this.model.find();
    return profiles;
  }

  public async create(obj:IProfile): Promise<IProfile> {
    const profile = await this.model.create(obj);
    return profile;
  }

  public async readById(id:string): Promise<IProfile | null> {
    const profile = await this.model.findById(id);
    return profile;
  }

  public async update(id: string, obj:IProfile):Promise<IProfile | null> {
    const profile = await this.model.findByIdAndUpdate(id, obj, { new: true }); // retorna o objeto atualizado por causa do new:true
    return profile;
  }

  public async delete(id: string):Promise<IProfile | null> {
    const profile = await this.model.findByIdAndDelete(id);
    return profile;
  }
}