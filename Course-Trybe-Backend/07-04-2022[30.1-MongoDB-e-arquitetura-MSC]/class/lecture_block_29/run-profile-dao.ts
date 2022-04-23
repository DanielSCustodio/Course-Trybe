import mongoose from 'mongoose';
import ProfileDAO from './src/models/ProfileDAO';

mongoose.connect('mongodb://localhost:27017/InstaTrybeT14');

async function main() {
  const profileDAO = new ProfileDAO();
  const [profile] = await profileDAO.read();
  console.log(profile.username);
}

main();