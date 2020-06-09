import React, {  Component } from 'react';
import { TodoListContext } from './TodoListContext';

class TodoItem extends Component {

    render() {
        return (
            <TodoListContext.Consumer>{(context) => {
                return (
                    <li className = 'collection-item'> 
                        {this.props.item.todo}
                        <button className = 'btn-flat secondary-content' onClick = {(event) => {
                            context.deleteTodoItem(this.props.item.id);
                        }}>
                        <i className = "blue-text material-icons "> delete </i>
                        </button>
                     </li>
                )
            }}</TodoListContext.Consumer>
        )
    }
}

export default TodoItem;