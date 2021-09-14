import React,{Component} from "react";

class RickAndMorty extends Component {
  constructor(props) {
    super(props);
    this.state={
      characters: [],
    };
  }

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
      this.setState({characters: data.results})
    })
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>
          Ricky and Morty Characters:
        </h1>
        <div className="body">
          {characters.map(({name,image,species,location}) => {   
          return (
            <div className="container">
              <h1>{name}</h1>
              <h3>{species}</h3>
              <p>{location.name}</p>
              <img src={image} alt={name}/>
            </div>
          )
        })}
      </div>
    </div>
    );
  }
}

export default RickAndMorty;