import React,{Component} from 'react';
import './Header.css';
import  {Link} from  'react-router-dom';
import logo from './img/logo.png'

class  Header extends Component {
  render(){
    return(
      <header className="header">
        <nav>
          <div >
            <Link  to ="/"><img className="logo" src={logo} alt="Logo" /></Link>
          </div>
          <div className="link-hover ">
            <Link to="/calendar">Calendário</Link>
            <Link to="/live-lectures">Aulas ao vivo</Link>
            <Link to="/trybe-talks">Trybe Talks</Link>
            <Link to="/solutions">Gabaritos</Link>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;