import mongoose from 'mongoose';
import ITweet from '../interfaces/ITweet';
import GenericDAO from './GenericDAO';

mongoose.connect('mongodb://localhost:27017/InstaTrybeT14');

const TweetSchema = new mongoose.Schema<ITweet>({
  text: String,
  likes: Number,
  retweets: Number,
});

export default class TweetDAO extends GenericDAO<ITweet> { // passa a interface para o Generics
  constructor() {
    super(mongoose.model('Tweet', TweetSchema));// passa o construtor para o Generics
  }
}