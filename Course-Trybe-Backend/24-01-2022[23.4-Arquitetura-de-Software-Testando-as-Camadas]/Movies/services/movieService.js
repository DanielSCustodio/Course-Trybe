const MoviesModel=require('../models/movieModel');

const create  = async ({title,directedBy,releaseYear}) => {
  const {id}=await MoviesModel.create({title,directedBy,releaseYear});
  return {id};
};

const getAll=() => {
  const movies = MoviesModel.getAll();
  return movies;
}

module.exports={
  create,
  getAll,
};