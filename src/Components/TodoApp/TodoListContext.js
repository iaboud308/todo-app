import React, { Component, createContext } from 'react';

const TodoListContext = createContext();

//This is a comment

class TodoListContextProvider extends Component {
  state = {
    todos: [
    ]
  }

  addTodoItem = (todoItem) => {
    const tempList = this.state.todos.map( (todo) => {
      return todo;
    })
    tempList.push(todoItem);
    this.setState({ todos: tempList })
  }

  deleteTodoItem = (todoItemId) => {
    console.log(todoItemId);
    let newList = this.state.todos.filter( (todo) => {
      if (todo.id === todoItemId) {
        return false;
      } else {
        return true;
      }
    })

    this.setState({todos: newList});
  }

  render() {

    return (
      <TodoListContext.Provider value = {{todos: this.state.todos, addTodoItem: this.addTodoItem, deleteTodoItem: this.deleteTodoItem}}>
        {this.props.children}
      </TodoListContext.Provider>
    )
  }
}

export default TodoListContextProvider;
export { TodoListContext };