import React,{ Component} from 'react';

class EstadoFavorito extends Component{
  render(){
    const{value, handleEvent} = this.props;
    return(
      <label htmlFor="area">
          Diga qual o seu estado favorito do Brasil ou do React
          <br/>
          <textarea id="area" 
          rows="5"
          name="estadoFavorito"
          value={value}
          onChange={handleEvent}/>
        </label>
    );
  }
}

export  default EstadoFavorito;