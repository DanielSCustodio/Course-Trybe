
import {SELECT_MOVIE} from '../action';
import categories from '../data';

const INITIAL_STATE={                                         // Arquietetura do estado global, esse é o estado inicial, esses são os estado global
  selectedCategory: categories[0],                 //Atualiza o player
  selectedMovie: categories[0].movies[0], //Atualiza o player
  categories,                                                       //Gera a lista de filmes na sidebar através de um map
}
function movieReducer(state=INITIAL_STATE,action) {
  switch(action.type) {
    case SELECT_MOVIE:
      return {
        ...state,
        selectedCategory: action.payload.selectedCategory, //recebendo os valores da action
        selectedMovie: action.payload.selectedMovie,            //recebendo os valores da action
      }
    default:
      return state;
  }
}
export default movieReducer;