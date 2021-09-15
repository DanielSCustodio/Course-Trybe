import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class Home extends Component {

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        <Link to="/about">About page</Link>
      </div>
    )
  }
}

export default Home
