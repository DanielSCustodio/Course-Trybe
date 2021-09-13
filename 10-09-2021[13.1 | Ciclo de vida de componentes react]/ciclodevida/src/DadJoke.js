import React,{Component} from "react";

class DadJoke extends Component {
  constructor() {
    super();
    this.saveJoke=this.saveJoke.bind(this);
    this.renderJokeElement=this.renderJokeElement.bind(this);

      this.state={
        jokeObj: undefined,
        loading: true,
        storedJokes: [],
      };
  }

  async fetchJoke() {
    //lóegica de fetch
    const requestHeaders={headers: {Accept: 'application/json'}}
    const requestReturn=await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const requestObject=await requestReturn.json();

    this.setState({
      jokeObj: requestObject,
    });
  }

  renderJokeElement(){

  }

  componentDidMount() {
    //vamos fazer algoa aqui
    this.fetchJoke();
  }
  saveJoke() {
    //salvando a piada no array de piadas existente
    this.fetchJoke();
  }


  render() {
    const {storedJokes}=this.state;
    const loadingElement=<span>Loading...</span>;
    return (
      <div>
        <span>
          {storedJokes.map(({id,joke}) => (<p key={id}>{joke}</p>))}
        </span>
        <span>Renderização Condicional</span>
      </div>
    );
  }

}

export default DadJoke;