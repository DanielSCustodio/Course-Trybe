import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectMovie} from '../action'

export class Sidebar extends Component {
  render() {
    const {categoriesState, selectMovieState} = this.props;
    return (
      <aside  className="parent">
                {categoriesState.map((category)=>(
                          <>
                                <h2>{category.name}</h2>
                                <div key={category.id} >
                                <ul>
                                  {category.movies.map((movie)=>(
                                      <li key={movie.id}>
                                    {movie.title}
                                      {' '}
                                      was released in 
                                      {' '}
                                    {movie.released}
                                    <div className="container">
                                        <button
                                        className='btn-select'
                                        type="button"
                                        onClick={ () =>  selectMovieState(movie, category ) }
                                        >
                                          select
                                        </button>
                                        </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                        </>
            ))}
      </aside>
    )
  }
}

const mapStateToProps =(state)=>({
  categoriesState: state.movies.categories,
  //esse movies foi criado no reducer e categories está no inicial_state(state) do reducer
});
const mapDispatchToProps =(dispatch)=>({
  selectMovieState: (selectedMovie, selectedCategory)=> dispatch(selectMovie(selectedMovie, selectedCategory)),
});



export default  connect(mapStateToProps, mapDispatchToProps) (Sidebar);

//mapStateToProps = Leitura de dados // Ler dados do estado
//mapDispatchToProps = Escrita de dados /Aciona a Action
