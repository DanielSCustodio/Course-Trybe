import React,{Component} from 'react';


class Solution extends Component{
  render(){
    const {match:{params:{id}}}= this.props;
    return(
      <section>
      <h1>Are you tired? {id}</h1>
    </section>
    );
  }
}

export default Solution;


