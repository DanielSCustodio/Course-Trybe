const sinon = require('sinon');
const { expect } = require('chai');
const movieModel = require('../../../models/movieModel');
const connection=require('../../../models/connection');

describe('Busca todos os filmes do banco(model/movieModel/getAll)', () => {

  describe('1 - Quando não existir nenhum filme cadastrado', () => {

    before(async () => {
      sinon.stub(connection,'query').resolves([]); // retorna uma promisse
    });

    after(() => {
      connection.query.restore();
    });

    it('I - Retorna um array', async () => {
      const result = await movieModel.getAll();
      expect(result).to.be.an('array');
    });

    it('II - O array está vazio', async () => {
      const result  = await movieModel.getAll();
      expect(result).to.be.empty;
    });
  });

  describe('2 - Quando  existir pelo menos um filme cadastrado', () => {

    before(async()=> {
      const movieItem = {
        id:1,
        title:"Titanic",
        directed_by:'James Cameron',
        release_year:1998
      }
      sinon.stub(connection, 'query').resolves([movieItem]);
    });

    after(()=>{
      connection.query.restore();
    });

    it('I - Retorna um array', async () => {
      const result = await movieModel.getAll();
      expect(result).to.be.an('array');
    });

    it('II - O array não está vazio', async () => {
      const result = await movieModel.getAll();
      expect(result).to.not.be.empty;
    });

    it('III - Todos os itens do array tem o tipo "objeto"', async () => {
      const result  = await movieModel.getAll();
      result.map((item)=>{
        expect(item).to.be.an("object");
      });
    });

    it('IV - Os itens possuem as propriedades: title, directedBy, releaseYear',async () => {
      const result  = await movieModel.getAll();
      result.map((item)=>{
        expect(item).to.include.all.keys(
          'id',
          'title',
          'releaseYear',
          'directedBy'
        );
      });
    });
  });
}); 