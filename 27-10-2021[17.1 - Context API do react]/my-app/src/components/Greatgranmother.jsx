import React, { Component } from 'react'
import Grandmother from './Grandmother'
import myContext from '../myContext';

class Greatgranmother extends Component {
  constructor(){
    super();
    this.state={
      money:100,
    }
  }

  handleSpendMoney=()=>{
    this.setState((prevState)=>({money:prevState.money-1}))
  }

  render() {
    const valueContext={
      money:this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <myContext.Provider>
      <div>
        <myContext.Provider value={valueContext}>
          <h1>Eu sou a bisavó</h1>
          <Grandmother/>
        </myContext.Provider>
      </div>
    </myContext.Provider>
    
    )
  }
}

export default Greatgranmother
