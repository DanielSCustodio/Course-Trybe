import { Model as M } from 'mongoose';

export default class GenericDAO<T extends object> {
  public model: M<T>; // variavel:tipo

  constructor(model: M<T>) { // variavel:tipo
    this.model = model;
  }

  public async read(): Promise<T[]> {
    const profiles = await this.model.find();
    return profiles;
  }

  public async create(obj:T): Promise<T> {
    const profile = await this.model.create(obj);
    return profile;
  }

  public async readById(id:string): Promise<T | null> {
    const profile = await this.model.findById(id);
    return profile;
  }

  public async update(id: string, obj: T):Promise<T | null> {
    const profile = await this.model.findByIdAndUpdate(id, obj, { new: true });
    return profile;
  }
/* 
  public async delete(id: string):Promise<T | null> {
    const profile = await this.model.findByIdAndDelete(id);
    return profile;
  } */
}