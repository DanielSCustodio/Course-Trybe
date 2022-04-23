import { expect } from "chai";
import Sinon from "sinon";
import ProfileDAO from "../../../models/ProfileDAO";

describe('Profile DAO', ()=>{
  let profileDAO = new ProfileDAO();

  const profileMock = 
    {
      _id:'1',
      username:'@dscut',
      followers:50,
      following:15,
    }
  ;
  const mockProfiles = [profileMock]

  describe('#read', () => {
    before(() =>{
      Sinon.stub(profileDAO.model, 'find').resolves(mockProfiles);
    });

    after(() => {
      Sinon.restore()
    });

    it('Retorna uma lista', async () => {
      const profiles = await profileDAO.read();
      expect(profiles).to.deep.equal(mockProfiles);
    });
  });

  describe('#create', () => {
    before(() => {
      Sinon.stub(profileDAO.model, 'create').resolves(profileMock)
    });

    after(() => {
      Sinon.restore();
    });

    it('Retorna um objeto', async () => {
      const profile = await profileDAO.create(profileMock);
      expect(profile).to.deep.equal(profileMock);
    });
  });

  describe('#getById', () => {
    describe('Quando existe o documento', () => {
      before(() => {
        Sinon.stub(profileDAO.model, 'findById').resolves(profileMock)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna um objeto', async() => {
        const profile = await profileDAO.readById(profileMock._id);
        expect(profile).to.deep.equal(profileMock);
      });
    });

    describe('Quando não existe o documento', ()=> {
      before(() => {
        Sinon.stub(profileDAO.model, 'findById').resolves(null)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna null', async() => {
        const profile = await profileDAO.readById('89652');
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
        Sinon.stub(profileDAO.model, 'findByIdAndUpdate').resolves(profileUpdate)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna um objeto', async() => {
        const profile = await profileDAO.update(profileMock._id, profileUpdate);
        expect(profile).to.deep.equal(profileUpdate);
      });
    });

    describe('Quando não existe o documento', ()=> {
      before(() => {
        Sinon.stub(profileDAO.model, 'findByIdAndUpdate').resolves(null)
      });
  
      after(() => {
        Sinon.restore();
      });
  
      it('Retorna null', async() => {
        const profile = await profileDAO.update('89652', profileUpdate );
        expect(profile).to.be.null;
      });
    });
  });
});