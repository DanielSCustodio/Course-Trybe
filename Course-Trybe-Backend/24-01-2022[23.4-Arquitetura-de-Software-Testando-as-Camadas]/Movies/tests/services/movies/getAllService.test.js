const sinon=require('sinon');
const {expect}=require('chai');

const movieService=require('../../../services/movieService');
const movieModel=require('../../../models/movieModel');
const {response}=require('express');

describe('Busca todos os filmes do banco (services/movies/getAll)',() => {
  describe('3 - Quando não existir nenhum filme cadastrado',() => {

    before(() => {
      sinon.stub(movieModel,'getAll').resolves([]);
    });

    after(() => {
      movieModel.getAll.restore();
    });

    it('I - Retorna um array',async () => {
      const result=await movieService.getAll();
      expect(result).to.be.an('array');
    });

    it('II - O array está vazio',async () => {
      const result=await movieService.getAll();
      expect(result).to.be.empty;
    });
  });

  describe('4 - Quando existe algum filme cadastrado',() => {
    before(() => {
      sinon.stub(movieModel, 'getAll').resolves([
        {
          id:1,
          title:'Some Movie',
          directedBy:'Some Director',
          releaseYear:1999
        }
      ]);
    });

    after(() => {
      movieModel.getAll.restore();
    });


    it('I - Retorna um array', async () => {
      const result = await movieService.getAll();
      expect(result).to.be.an('array');
    });

    it('II - O array não está vazio',async () => { 
      const result = await movieService.getAll();
      expect(result).to.be.not.empty;
    });

    it('III - O array possui itens do tipo "objeto"', async () => {
      const [item] = await movieService.getAll();
      expect(item).to.be.an('object');
    });

    it('IV - Os itens possuem propriedades: "id", "title", "releaseYear","directedBy"', async () => {
      const [item] = await movieService.getAll();
      expect(item).include.all.keys(
        'id',
        'title',
        'releaseYear',
        'directedBy'
      );
    });
  });
});