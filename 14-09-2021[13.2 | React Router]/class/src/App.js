import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';

//Os elementos que vão ser utilizado na single page são encapsulados pelo BrowserRouter
function App() {
  return (
    <BrowserRouter > 
      <div className="App">
        <header className="App-header">
        <Header/>
        <Content/>  
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
