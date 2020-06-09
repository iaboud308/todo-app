import React, { Component } from 'react';

import AddTodo from './AddTodo';
import TodoListContextProvider from './TodoListContext';
import TodoList from './TodoList';

class TodoApp extends Component {

  render() {

    return (
      <div>
      <TodoListContextProvider>
        <AddTodo />
        <TodoList />
      </TodoListContextProvider>
      </div>
    )
  }
}

export default TodoApp;