import React, { Component } from 'react'
import {connect} from 'react-redux';
export class Player extends Component {
  render() {
    const {selectedMovieState, selectedCategoryState} = this.props; //Acessando o estado global
    return (
      <div className="player">
        <h1>{selectedMovieState.title}</h1>
        <h3>
        {selectedCategoryState.name}
          {' '}
          -
          {' '}
          {selectedMovieState.released}
          </h3>
          <section>
            <iframe 
            src={selectedMovieState.link}
            title="trailer"
            width="520"
            height="315"
            />
          </section>
      </div>
    )
  }
}

//mapStateToProps Acessa o estado da aplicação via props
const mapStateToProps = (state) =>  ({
  selectedMovieState: state.movies.selectedMovie,
  selectedCategoryState: state.movies.selectedCategory ,
    //esse movies foi criado no reducer, ele é o estado global
});

export default connect(mapStateToProps)(Player);
