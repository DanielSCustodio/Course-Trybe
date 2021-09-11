import React, {Component} from "react";


class EmailForm extends Component{
  constructor(){
    super();
    this.state={
      email: "",
    }
    // this.handleChange = this.handleChange.bind(this); //Agora a fuinção tem acesso ao this da classe 
  }

  // handleChange(event){
  //   this.setState({email: event.target.value}) //O input está recebendo o valor digitado no próprio Input, tsc tsc
  //                                                                                   //1 -A função só reconhece o próprio this e não o this do contexto geral da class por isso é necessário a merda do bind
  // }

  handleChange =(event)=>{
    this.setState({email: event.target.value});
  }

  render(){
    const {email} = this.state;
    return(
      <label htmlFor="email">
          Email:
          <input 
          value={email} 
          type="email"  
          name="email" 
          id="email"
          onChange={this.handleChange}
    />
    </label>
    );
  }
}
export default EmailForm;
