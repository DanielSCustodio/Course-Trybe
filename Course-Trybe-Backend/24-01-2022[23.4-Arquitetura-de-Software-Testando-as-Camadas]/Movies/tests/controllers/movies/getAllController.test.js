const sinon = require('sinon');
const {expect}=require('chai');
const movieService = require('../../../services/movieService');
const movieController = require('../../../controllers/movieController');

describe('Bucas todos os filmes através da API(controllers/movies/getAll)', () => {
  describe('5 - Quando não existe nenheum filme cadatsrado', () => {
    const fakeReq = {};
    const fakeRes = {};

    before(() => {
      sinon.stub(movieService,'getAll').resolves([]);
      fakeReq.body = {};
      fakeRes.status = sinon.stub().returns(fakeRes);
      fakeRes.json = sinon.stub().returns();
    });

    after( ()=> {
      movieService.getAll.restore();
    });
    
    it('I - Retorna o status 200',async () => {
      await movieController.getAll(fakeReq,fakeRes)
      expect(fakeRes.status.calledWith(200)).to.be.true;
    });

    it('II - Retorna um JSON com um array de objeto',async () => {
      await movieController.getAll(fakeReq,fakeRes);
      expect(fakeRes.json.calledWith(sinon.match.array)).to.be.true;
    });
  });

  describe('6 - Quando exixte algum filme cadastrado ', ()=> {
    const fakeReq={};
    const fakeRes = {};
    before(()=>{
      sinon.stub(movieService,'getAll').resolves([{
        id:1,
        title:'Some Film',
        directedBy:'jay Z',
        releaseYear:'1985'
      }])
      fakeReq.body={};
      fakeRes.status=sinon.stub().returns(fakeRes);
      fakeRes.json=sinon.stub().returns();
    });

    after(()=> {
      movieService.getAll.restore();
    });

    it('I - Retorna o status 200', async  ()=>{
      await movieController.getAll(fakeReq, fakeRes);
      expect(fakeRes.status.calledWith(200)).to.be.true;
    });

    it('II - Retorna um array no formato Json',async () => {
      await movieController.getAll(fakeReq,fakeRes);
      expect(fakeRes.json.calledWith(sinon.match.array)).to.be.true;
    });

    it('III - O array contém um filme', async ()=>{
      await movieController.getAll(fakeReq, fakeRes);
      const thirdCallArguments = fakeRes.json.args[2];
      const firstArgument = thirdCallArguments[0];
      const movie = firstArgument[0];
      expect(movie).to.be.an('object');
    });
  });
  

});