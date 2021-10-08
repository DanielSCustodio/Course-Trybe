import React, { Component } from 'react'
import {connect} from 'react-redux';
export class Player extends Component {
  render() {
    const {selectedMovieState, selectedCategoryState} = this.props;
    return (
      <div>
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
            width="320"
            height="215"
            />
          </section>
      </div>
    )
  }
}

const mapStateToProps =(state)=>({
  selectedMovieState: state.movies.selectedMovie,
  selectedCategoryState: state.movies.selectedCategory ,
    //esse movies foi criado no reducer e categories está no inicial_state(state) do reducer
});

export default connect(mapStateToProps)(Player);
