const MoviesService = require('../services/movieService');

const isValid = (title, directedBy, releaseYear) => {
  if (!title || typeof title !== 'string') return false;
  if (!releaseYear || typeof releaseYear !== 'number') return false;
  if (!directedBy || typeof directedBy !== 'string') return false;

  return true;
};

const create = async (req, res) => {
  const {title, directedBy, releaseYear} = req.body;

  const isMovieValid = isValid(title, directedBy, releaseYear);
  
  if (!isMovieValid)  {
    return res.status(422).json({
      code: 'invalid_input',
      message: 'invalid_title, release year or direceted by'
    })
  }

  const movie = await MoviesService.create({
    title,
    directedBy,
    releaseYear
  });

  /*
    Perceba que `middlewares`, ao invés de executar um `return` padrão,
    como outras funções, vão, na maior parte das vezes, devolver as
    funções passadas por parâmetro, através dos objetos `req, res, next`.

    No nosso caso, estamos utilizando os métodos `status()` e `send()`,
    de `res` (response) para escrever/devolver um valor para a
    requisição daquele `end-point`.
  */
  res.status(201).json(movie);
};

const getAll = async (req, res) => {
  const movies = await MoviesService.getAll();
  res.status(200).json(movies);
}

module.exports = {
  create,
  getAll
};