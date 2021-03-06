const connection = require('./connection');

  // Note que `name` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false
const getNewAuthor = ({id, firstName, middleName, lastName})=> {
  const  fullName = [firstName, middleName, lastName].filter((name)=>name).join('');
  return {
    id,  
    firstName,
    middleName,
    lastName,
    fullName
  }
}

 // Converte o nome dos campos de snake_case para camelCase
const serialize =(authorData) => {
  return {
    id:authorData.id,
    firstName:authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  }
}

  // Busca todos os autores do banco.
const getAll = async() => {
  const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  return authors.map(serialize).map(getNewAuthor);
}

const findById = async (id) => {
  const[authorId] =  await connection.execute(
  'SELECT id, first_name, middle_name, last_name FROM authors WHERE id=?',[id]); 
  if(authorId.length === 0){return null}

  const {firstName, middleName, lastName} = authorData.map(serialize)[0];
  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
}

module.exports ={
  getAll,
  findById
}