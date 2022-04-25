import { expect } from "chai";
import mongoose from 'mongoose'; 
import Sinon from "sinon";
import GenericDAO from "../../../models/GenericDAO";

describe('Profile DAO', ()=>{
  const GenericSchema = new mongoose.Schema({title: String});
  let genericDAO = new GenericDAO(mongoose.model('Generic', GenericSchema));

  const profileMock = 
    {
      _id:'1',
      title:'daniel'
    }
  ;
  const mockProfiles = [profileMock]

  describe('#read', () => {
    before(() =>{
      Sinon.stub(genericDAO.model, 'find').resolves(mockProfiles);
    });

    after(() => {
      Sinon.restore()
    });

    it('Retorna uma lista', async () => {
      const profiles = await genericDAO.read();
      expect(profiles).to.deep.equal(mockProfiles);
    });
  });

  describe('#create', () => {
    before(() => {
      Sinon.stub(genericDAO.model, 'create').resolves(profileMock)
    });

    after(() => {
      Sinon.restore();
    });

    it('Retorna um objeto', async () => {
      const profile = await genericDAO.create(profileMock);
      expect(profile).to.deep.equal(profileMock);
    });
  });

  describe('#getById', () => {
    describe('Quando existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findById').resolves(profileMock)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna um objeto', async() => {
        const profile = await genericDAO.readById(profileMock._id);
        expect(profile).to.deep.equal(profileMock);
      });
    });

    describe('Quando não existe o documento', ()=> {
      before(() => {
        Sinon.stub(genericDAO.model, 'findById').resolves(null)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna null', async() => {
        const profile = await genericDAO.readById('89652');
        expect(profile).to.be.null;
      });
    });
  });

  describe('#update', () => {
    const profileUpdate =  {
      username:'@daniel',
      followers:14,
      following:50,
    }

    describe('Quando existe o documento', () => {
      before(() => {
        Sinon.stub(genericDAO.model, 'findByIdAndUpdate').resolves(profileUpdate)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna um objeto', async() => {
        const profile = await genericDAO.update(profileMock._id, profileUpdate);
        expect(profile).to.deep.equal(profileUpdate);
      });
    });

    describe('Quando não existe o documento', ()=> {
      before(() => {
        Sinon.stub(genericDAO.model, 'findByIdAndUpdate').resolves(null)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna null', async() => {
        const profile = await genericDAO.update('89652', profileUpdate );
        expect(profile).to.be.null;
      });
    });
  });
});