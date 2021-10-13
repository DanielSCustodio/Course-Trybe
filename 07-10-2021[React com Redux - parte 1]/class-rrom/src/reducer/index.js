//Reducer armazena os tipos de estados global da aplicação(Ex: users, movies, product)
import {combineReducers} from 'redux'; // Quando existe mais de um reducer
import moviReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: moviReducer,         //esse é o estado global
})

export default rootReducer;