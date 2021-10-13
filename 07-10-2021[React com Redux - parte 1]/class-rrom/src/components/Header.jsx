import React, { Component } from 'react'
import avatar from './avatar.png'
export class Header extends Component {
  render() {
    return (
      <header className="Header">   
        <span>Trybeflix</span>  
    <div className="user">
        <img src={avatar}alt="alt"  width="30" height="30"/>
        <span>Daniel</span>
      </div>
      </header>

    )
  }
}

export default Header
