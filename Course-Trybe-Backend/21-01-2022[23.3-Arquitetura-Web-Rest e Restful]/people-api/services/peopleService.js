const peopleModel=require('../model/peopleModel');

const getAll = async () => {
  const person = await peopleModel.getAll();
  return person;
}

const getById = async (id) => {
  const person = await peopleModel.getById(id);
  if(!person) {
    throw {
      code: 'not_found',
      message: `person with id ${id} was not found`
    };
  }
  return person;
}

const add = async ({name,age}) => {
  const addPerson = await peopleModel.add(name,age);
  return addPerson
}

const update = async ({name, age, id}) => {
  await getById(id);
  return await peopleModel.update(name, age, id);
}

const remove = async (id) => {
  return await peopleModel.remove(id);
}


module.exports={
  getAll,
  getById,
  add,
  update,
  remove,
}