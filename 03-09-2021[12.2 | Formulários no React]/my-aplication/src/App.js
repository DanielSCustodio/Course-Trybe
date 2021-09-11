import React from 'react';
import LoginForm from './components/LoginForm';
import RegsiterForm from './components/RegisterForm';
import './App.css';


class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <LoginForm/>
        <RegsiterForm/>
      </main>
    )
  }
}

export default App;
