import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class About extends Component {
  render() {
    const{id}=this.props.match.params;
    return (
      <div> 
        <h2>About Page {this.props.message} : {id}</h2>
        <Link to="/">Home</Link>
      </div >
    )
  }
}

export default About
