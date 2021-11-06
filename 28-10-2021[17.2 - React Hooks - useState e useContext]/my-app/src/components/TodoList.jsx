import React, { Component } from 'react'

class TodoList extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
        <ul>
          {todos.map(todo => <li>{todo}</li>)}
        </ul>
      </div>
    )
  }
}

export default TodoList
