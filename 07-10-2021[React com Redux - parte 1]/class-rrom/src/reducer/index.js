import {combineReducers} from 'redux';
import moviReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: moviReducer,
})

export default rootReducer;