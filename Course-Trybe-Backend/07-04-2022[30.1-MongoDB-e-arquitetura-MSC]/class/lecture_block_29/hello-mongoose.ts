import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/InstaTrybeT14');

const ProfileSchema = new mongoose.Schema({
  username: String,
  followers: Number,
  following: Number,
});

const model = mongoose.model('Profile', ProfileSchema);

async function run() {
/*   await model.create({ username: '@mannobra', followers: 100, following: 50 }); */
/*   const profile = await model.find(); */
/*  const profile = await model.findById('6262f1a7d4c048c1e2dd3f71'); */
  const profile = await model.findOne({ username: '@dscut' });
  console.log(profile);
}

run(); // Ao executar o código o banco InstaTrybeT14 é criado com a coleção Profile(profiles no banco)