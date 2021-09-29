import pokemonCard from './pokemonCard.png';
import './App.css';
import {Component} from 'react';

class App extends Component {
    constructor() {
        super();
        this.state={
            cards: undefined,
            pokemon: '',
        };
    }

    handleChange=(event) => {
        this.setState({
            pokemon: event.target.value,
        });
    }

    handleClick(pokemon) {
        fetch(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
            .then((resolve) => resolve.json())
            .then((pokemonCards) => this.setState({cards: pokemonCards.cards[0]}))
    }
    render() {
        const {cards,pokemon}=this.state;
        return (
            <div className="App">
                <>
                    <header className="App-header">
                        <img src={pokemonCard} className="App-logo" alt="logo" />
                    </header>
                    <main>
                        <h2>Pesquise um Pokémon</h2>
                        <input
                            type="text"
                            className="form__input"
                            onChange={(e) => this.handleChange(e)}
                            data-testid="input-text"
                        />

                        <button onClick={() => this.handleClick(pokemon)}>Pesquisar</button>

                        <div>
                            {cards&&(
                                <div>
                                    <h3>{cards.name}</h3>
                                    {cards.types.map((type) => (
                                        <p key={type}>{type}</p>
                                    ))}
                                    <img src={cards.imageUrl} alt={`${cards.name}-card`} />
                                </div>
                            )}
                        </div>
                    </main>
                </>
            </div>
        );
    }
}

export default App;
