import React, { Component } from 'react';

import { TodoListContext } from './TodoListContext';

class AddTodo extends Component {

  formHandler = (event) => {
    event.target.todo.value = '';
  }

  render() {
    return (
      <TodoListContext.Consumer>{(context) => {
        return (
          <form onSubmit = {(event) => {
            event.preventDefault();
            console.log(context);
            let newItemId = context.todos.length;
            let item = {
              id: newItemId, todo: event.target.todo.value, complete: false
            }
            console.log(item);
            context.addTodoItem(item);
            this.formHandler(event);
          }}>
            <div className = 'input-field'>
            <input id = 'todo'  name = 'todo' type = 'text'></input>
            <label htmlFor = 'todo'>Todo</label>
            </div>
            <input type = 'submit' value = 'Add Item' className = 'btn'></input>
          </form>
        )   
      }}</TodoListContext.Consumer>
      
    )
  }
}

export default AddTodo;