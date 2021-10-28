import React, { Component } from 'react'
import myContext from '../myContext'

class Daugther extends Component {
  render() {
    return (
      <div>
        <h1>Eu sou a filha</h1>
        <myContext.Consumer>
          {
            value =>(
              <div>
                <p>{`Eu tenho ${value.money} para gastar`}</p>
                <button onClick={value.spendMoney}>Pedir um Ifood</button>
              </div>
            )
          }
        </myContext.Consumer>
      </div>
    )
  }
}

export default Daugther
