import GenericDAO from '../models/GenericDAO';

export default class GenericService<T> {
  constructor(public dao: GenericDAO<T>) { }

  public read():Promise<T[]> {
    const itens = this.dao.read();
    return itens;
  }
}