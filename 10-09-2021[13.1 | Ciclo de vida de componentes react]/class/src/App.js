import React,{Component} from 'react';
import './App.css';
import Cronometer from './components/Cronometer';

class App extends Component {
    constructor() {
    super();
    this.state={
      showCronometer: true,
    }
  }

  cronometerOnOff=() => {
    this.setState((prevState) => ({showCronometer: !prevState.showCronometer})) //testar destructing em prevState
    //setState recebe callback do estado anterior
  }


  render() {
    const {showCronometer}=this.state;
    return (
      <div className="App">
        <header className="App-header">
          {showCronometer&&<Cronometer />   /*sendo a primeira condição verdadeira a segunda é renderizada*/}
        
          <button
            type="button"
            onClick={() => this.cronometerOnOff()}>
            {showCronometer ? 'Desligar Cronômetro': 'Ligar Cronômetro'}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
