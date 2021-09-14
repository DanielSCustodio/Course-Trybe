import React, {Component} from 'react';

class Cronometer extends Component{
 

  constructor(){
    super();
    this.state={seconds:0}
  }

  componentDidMount(){
    const ONE_SECOND = 1000;
   this.cronometerInterval =setInterval(() => {                    // Guardando o interavalo no this para que ele fique disponível para as demais funções
    this.setState((prevState)=>({seconds: prevState.seconds +1}))
  }, ONE_SECOND);
  }

  componentDidUpdate(prevProps, prevState){
    const MAX_SECONDS =5;
    if(prevState.seconds === MAX_SECONDS){
      this.resetSeconds();
      alert('Acabou o tempo')
    }
  }

  componentWillUnmount(){
    clearInterval(this.cronometerInterval);    
  }

  resetSeconds =()=>{
    this.setState({seconds: 0})
  }


  render(){
    const{seconds}= this.state
  
    return(
      <main>
        <h2>{seconds}</h2>
      </main>
    )
  }
}

export default Cronometer;