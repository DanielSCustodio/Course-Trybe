//A store vai disponibilizar os estados global da aplicação  para as interfaces, através do reducer que ela recebe

import { createStore } from 'redux';
import rootReducer from '../reducer'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;