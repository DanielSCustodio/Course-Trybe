import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from '../../reducers';

renderWithRedux = (
  component, // Componente que vai ser renderizado inicialmente
  { initialState = {}, store = createStore(rootReducers, initialState) },
) => ({
  ...render(
    <Provider store={ store }>
      {component}
    </Provider>,
  ),
  store,
});
export default renderWithRedux;
