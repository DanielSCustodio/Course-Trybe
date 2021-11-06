import React, { useContext } from 'react';
import './App.css';
import ISSLocation from './components/ISSLocation';
import PeopleInSapce from './components/PeopleInSapce';
import ISSContext from './context/ISSContext';

function App() {
  const { showMap, toogleMap } = useContext(ISSContext);
  return (
    <div className="App">
      <h1>
        Space Station
        {' '}
        <span className="purple-font">Tracker</span>
      </h1>
      <button
        type="button"
        onClick={ toogleMap }
      >
        Esconder Mapa
      </button>
      { showMap && <ISSLocation />}
      <PeopleInSapce />
    </div>

  );
}

export default App;
