import React from 'react';
import { ListItem, Typography } from "@material-ui/core";
import './todolistapp.css';

function TodoApp({ todo, toggleComplete }) {
    return (
        <ListItem style={{display: "block"}}>
            <Typography
            variant="body1"
                style={{
                    alignItems: "center",
                    textAlign: "center",
                    color: "white",
                    fontSize: "1.5em",
                    textDecoration: todo.completed ? "line-through" :null
                }}
            >
                    {todo.task}
            </Typography>
        </ListItem>
    );
}

export default TodoApp;