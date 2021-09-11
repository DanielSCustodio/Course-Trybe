import React,{Component} from 'react';

class ButtonForm extends Component{
  render(){
    const {value} = this.props;
    return(
      <div>
        <button type="submit">{value}</button>
      </div>
    );
  }
}

export default ButtonForm;