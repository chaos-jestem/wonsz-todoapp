import React from 'react';
import { List } from "@material-ui/core";
import TodoApp from './TodoApp';


function TodoListApp({ todos, toggleComplete }) {
    return(
            <List >
                {todos.map(todo => (
                    <TodoApp
                        key={todo.id} 
                        todo={todo} 
                        toggleComplete={toggleComplete}
                    />
                ))}
            </List>
    );
}

export default TodoListApp;