import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>
              <Link to ="/">Sobre Mim</Link>
            </li>

            <li>
              <Link to ="projects">Projetos</Link>
            </li>

            <li>
              <Link to ="comments">Deixe um comentário</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
