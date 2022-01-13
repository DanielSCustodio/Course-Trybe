const axios = require('axios');

const promises = [];
const getPokemonById = async (id) => {
  const response =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`); 
  return response.data.name;
}

const showList = async () => {
  for (let index = 1; index <= 50; index++) {
    const promisesPokemon = getPokemonById(index);
    promises.push(promisesPokemon);
  }
  const names = await Promise.all(promises)
  console.log(names);
}

showList();