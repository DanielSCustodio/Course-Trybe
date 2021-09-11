import React,{Component} from 'react';
import EstadoFavorito from './EstadoFavorito';

class Form extends Component {
constructor(){
  super()
  this.state={
    estadoFavorito: '',
    nome:   '',
    email:  '',
    idade:  0,
    vaicomparecer: false,
    palavraChaveFavorita:'estado',
  }
}

handleEvent =({target})=>{
  const{name} = target;
  const value  = target.type === 'checkbox' ? target.checked : target.value;
  this.setState({
    [name]:value,
  });
}

  render(){
    return(
    <div>
        <h1>Estados e React 👩‍💻</h1>
      <form className="form">
        <EstadoFavorito value={this.state.estadoFavorito} handleEvent={this.handleEvent}/>

        <label htmlFor="email">
          Email
          <input id="email" 
          type="email"  
          name="email"
          value={this.state.email}
          onChange={this.handleEvent}/>
        </label>

        <label htmlFor="nome">
          Nome
          <input id="nome"
          type="nome"  
          name="nome"
          value={this.state.nome}
          onChange={this.handleEvent}/>
        </label>

        <label htmlFor="idade">
          Idade
          <input id="idade" 
          type="number" 
          name="idade"
          value={this.state.number}
          onChange={this.handleEvent}/>
        </label>

        <label htmlFor="comparecer">
          Vai Comparecer?
          <input  id="comparecer" 
          type="checkbox"  
          name="vaicomparecer"
          value={this.state.vaicomparecer}
          onChange={this.handleEvent}/>
        </label>

        <label htmlFor="palavra-chave">
          Escolha  sua palavra chave favorita
          <select name="palavraChaveFavorita" id="palavra-chave"
          value={this.state.palavraChaveFavorita}
          onChange={this.handleEvent}
          >
            <option value="estado">Estado</option>
            <option value="evento">Evento</option>
            <option value="props">Props</option>
            <option value="hooks">Hooks</option>
          </select>
        </label>
      </form>
    </div>
    );
  }
}

export  default Form;