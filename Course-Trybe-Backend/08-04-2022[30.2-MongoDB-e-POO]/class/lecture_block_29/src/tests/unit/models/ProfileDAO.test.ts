import { expect } from "chai";
import ProfileDAO from "../../../models/ProfileDAO";

describe('ProfileDAO model', ()=>{
  let profileDAO = new ProfileDAO();
  it('Possui o model', () => {
    expect(profileDAO.model).to.be.not.null;
  });
});