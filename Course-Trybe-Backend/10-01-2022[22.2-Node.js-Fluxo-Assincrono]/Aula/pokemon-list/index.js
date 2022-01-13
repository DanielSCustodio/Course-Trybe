//instalação axio : npm i axios
const axios = require('axios');

const content = axios.get('https://pokeapi.co/api/v2/pokemon/1');

const functionThen = () => {
  axios.get('https://pokeapi.co/api/v2/pokemon/1')
    .then((response)=> console.log(`Fuction Then: ${response.data.name}`));
}

const functionAsyncAwait = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/1'); 
  console.log(`Fuction Async/Await: ${response.data.name}`);
}

functionThen();
functionAsyncAwait();

