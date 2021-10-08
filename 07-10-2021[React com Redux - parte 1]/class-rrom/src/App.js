import React, { Component } from 'react'
import {Provider} from 'react-redux';
import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import store from './store';

import './index.css';
//Provider permite que todos os componentes aninhado dentro dele tenham acesso ao estado global
export class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Header/>
          <main class="main">
            <Player/>
            <Sidebar/>
          </main>
        </Provider>
      </div>
    )
  }
}

export default App
