import React, { Component } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import contextISS from './context/contextISS';

class App extends Component {
  constructor() {
    super();
    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
      isLoading: false,
    };
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
