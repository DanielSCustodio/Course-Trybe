import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectMovie} from '../action'   //importando action

export class Sidebar extends Component {
  render() {
    const {categoriesState, selectMovieState} = this.props; //Acessando o estado global
    return (
      <aside  className="parent">
                {categoriesState.map((category)=>(
                          <>
                                <div key={category.id} >
                                <h2>{category.name}</h2>
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
                                        onClick={ () =>  selectMovieState(movie, category ) } // Enviando a action -   // A action captura as informações (movie, category )e leva até o reducer onde é feita a atualização do estado
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

const mapStateToProps   = (state) =>  ({
  categoriesState: state.movies.categories,
  //esse movies foi criado no reducer e categories está no inicial_state(state) do reducer
});
//mapStateToProps = Leitura de dados // Ler dados do estado
//o sidebar faz leitura pois está lendo do estado global o 'categoies'


//tem que importar a action
const mapDispatchToProps  =  (dispatch)  =>  ({
  selectMovieState: (selectedMovie, selectedCategory)=> dispatch(selectMovie(selectedMovie, selectedCategory)),
});
//mapDispatchToProps = Escrita de dados /Aciona a Action, cria um novo estado
//o sidebar faz escrita de dados porque ao clicar no botão, ele escreve os dados selecionado (um novo state)  no player 


export default  connect(mapStateToProps, mapDispatchToProps) (Sidebar);
//connect conecat o componente ao estado global

