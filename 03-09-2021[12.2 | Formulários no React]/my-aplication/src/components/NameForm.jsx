import React, {Component} from "react";


class NameForm extends Component{
  constructor(){
    super();
    this.state={
      name: "",
    }
  }

  handleChange =(event)=>{
    this.setState({name: event.target.value});
  }

  render(){
    const {name} = this.state;
    return(
      <label htmlFor="name">
          Nome:
          <input 
          value={name} 
          type="name"  
          name="name" 
          id="name"
          onChange={this.handleChange}
    />
    </label>
    );
  }
}
export default NameForm;
