import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export class App extends Component {
  constructor(){
    super();
    this.state={
      todos:[],
    }
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(newTodo){
    this.setState((prevState)=>({
      todos:prevState.todos.concat(newTodo)
    }));
  }

  render() {
    return (
      <main>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList todos={this.state.todos}/>
        
      </main>
    )
  }
}

export default App
