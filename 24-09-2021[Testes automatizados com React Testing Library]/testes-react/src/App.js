import React, {Component} from 'react';
import './App.css';


class App  extends Component{
  constructor(){
    super();
    this.state=({
      email:'',
    saveEmail:'',
    })
  }

  changeEmail(value){
    this.setState({email:value});
  }

  changeSaveEmail(value){
    this.setState({saveEmail:value, email:''});
  }

  render(){
    const {email, saveEmail}= this.state;
    return(
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
          id="id-email"
          value={email}
          type="email"
          onChange={(e)=>this.changeEmail(e.target.value)}
          />
        </label>
        <input
          id="button-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={()=>this.changeSaveEmail(email)}
          style={{color: "green"}}
        />

        <input
          id="btn-id"
          type="button"
          value="Voltar"
          style={{color: "red"}}
        />

        <h2 data-testid="id-email-user">{`Email: ${saveEmail}`}</h2>

      </div>
    );
  }
}

export default App;
