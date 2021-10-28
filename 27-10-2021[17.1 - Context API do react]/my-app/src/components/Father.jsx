import React, { Component } from 'react'
import Daugther from './Daugther'

class Father extends Component {
  render() {
    return (
      <div>
        <h1>Eu sou o pai</h1>
          <Daugther/>
      </div>
    )
  }
}

export default Father