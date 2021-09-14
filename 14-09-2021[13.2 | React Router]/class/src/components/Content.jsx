import React,{Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import solutions from '../data/Class';
import Calendar from '../pages/Calendar';
import Home from '../pages/Home';
import LiveLectures from '../pages/LiveLectures';
import Solution from '../pages/Solution';
import Solutions from '../pages/Solutions';
import TrybeTalks from '../pages/TrybeTalks';

import './Content.css';
class  Content extends Component {
  render(){
    return(
      <main className="content">
        <Switch>
          <Route  exact path="/" component={Home}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/live-lectures" component={LiveLectures}/>
          <Route path="/trybe-talks" component={TrybeTalks}/>
          <Route 
          exact
          path="/solutions"
          render={(reactRouterProps)=>(  
          <Solutions  {...reactRouterProps} solutions={solutions}/>)
          }/>
          <Route 
          path="/solutions/:id"
          component={Solution}
        />
        </Switch>
      </main>
    );
  }
}

export default Content;