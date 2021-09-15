import {BrowserRouter,Route, Switch} from 'react-router-dom';
import About from './About'
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:id" render={(props) => <About  {...props} message="Isto é uma props" />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
