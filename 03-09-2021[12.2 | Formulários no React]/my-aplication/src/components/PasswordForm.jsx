import React, {Component} from "react";


class PasswordForm extends Component{
  constructor(){
    super();
    this.state={
      password: "",
    }
    // this.handleChange = this.handleChange.bind(this); //Agora a fuinção tem acesso ao this da classe 
  }

  // handleChange(event){
  //   this.setState({email: event.target.value}) //O input está recebendo o valor digitado no próprio Input, tsc tsc
  //                                                                                   //1 -A função só reconhece o próprio this e não o this do contexto geral da class por isso é necessário a merda do bind
  // }

  handleChange =(event)=>{
    this.setState({password: event.target.value});
  }

  render(){
    const {password} = this.state;
    return(
      <label htmlFor="password">
          Senha:
          <input 
          value={password} 
          type="password"  
          name="password" 
          id="password"
          onChange={this.handleChange}
    />
    </label>
    );
  }
}
export default PasswordForm;
