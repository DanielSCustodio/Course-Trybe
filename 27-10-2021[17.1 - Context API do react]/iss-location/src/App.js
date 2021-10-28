import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import contextISS from './context/contextISS';
import { getCurrentISSLocation } from './services/issAPI';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 10,
      longitude: 10,
      error: null,
      isLoading: false,
    };
  }

  getISSLocation() {
    getCurrentISSLocation();
  }

  render() {
    return (
      <contextISS.Provider value={ { ...this.state } }>
        <div className="App">
          <h1>
            Space Station
            {' '}
            <span className="purple-font">Tracker</span>
          </h1>
          <ISSLocation />
        </div>
      </contextISS.Provider>
    );
  }
}

export default App;
