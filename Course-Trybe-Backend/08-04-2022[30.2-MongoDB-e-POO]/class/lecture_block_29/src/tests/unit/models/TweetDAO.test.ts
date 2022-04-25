import { expect } from "chai";
import TweetDAO from "../../../models/TweetDAO";

describe('TweetDAO model', ()=>{
  let tweetDAO = new TweetDAO();
  it('Possui o model', () => {
    expect(tweetDAO.model).to.be.not.null;
  });
});