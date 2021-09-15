import React,{Component} from 'react';
import  {Link} from  'react-router-dom';
import   './css/Solution.css'


class Solutions extends Component{
  render(){
    const {solutions}= this.props;
    return(
      <section>
      <ul>
        {solutions.map((solution) => (
          <li key={ solution.id }>
            <Link className="link-solution" to={ `solutions/${solution.name}` }>{solution.name}</Link>
          </li>
        ))}
      </ul>
    </section>
    );
  }
}

export default Solutions;


