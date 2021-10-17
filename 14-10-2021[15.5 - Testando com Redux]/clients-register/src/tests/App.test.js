import React from 'react';
import { Provider } from 'react-redux';
// import store from '../store';
import { createStore } from 'redux';
import renderWithRouter from './helpers/renderWithRouter';
import rootReducer from '../reducers';
import App from '../App';

describe('cadastro de clientes', () => {
  it('A tele inicial é renderizada', () => {
    const store = createStore(rootReducer);
    renderWithRouter(
      <Provider store={ store }>
        <App />,
      </Provider>,
    );
  });
});
