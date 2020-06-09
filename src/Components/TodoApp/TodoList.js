import React, { Component } from 'react';
import { TodoListContext } from './TodoListContext';
import TodoItem from './TodoItem';

class TodoList extends Component {

  render() {
    return (
      <TodoListContext.Consumer>{(context) => {
        return (
          <div>
            <ul className = 'collection'>
              {context.todos.map( (todo) => {
                return (
                  <TodoItem key = {todo.id} item = {todo}/>
                )
              })
            }
            </ul>
      </div>
        )
      }}</TodoListContext.Consumer>
    )
  }
}

export default TodoList;