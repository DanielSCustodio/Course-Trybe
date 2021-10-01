import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Comments from './components/Comments';
import NotFound from './components/NotFound';



class  App extends React.Component   {
  render(){
    return (
      <>
        <Header/>
        <Switch>
          <Route exact path="/">
            <section>
            <h1>Página sobre mim</h1>
            </section>
          </Route>
          <Route exact path="/projects">
            <section>
              <h1>Página de Projetos</h1>
            </section>
          </Route>
          <Route  exact path="/comments" component={Comments}/>
          <Route component={NotFound}/>
        </Switch>
      </>
      );
  }
}

export default App;
