/* import mongoose from 'mongoose'; */
import ProfileDAO from './models/ProfileDAO';

/* mongoose.connect('mongodb://localhost:27017/InstaTrybeT14'); */

const main = async () => {
  const profileModel = new ProfileDAO();
  const profiles = await profileModel.read();
  console.log(profiles);
};

const detailsProfile = async () => {
  const profileDAO = new ProfileDAO();
  const [profile] = await profileDAO.read();
  console.log(profile.username);
};

detailsProfile();
main();