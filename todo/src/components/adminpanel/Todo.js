import React from 'react';
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleRemoveClick() {
        removeTodo(todo.id);
    }
    return (
        <ListItem style={{display: "flex", float: "left", paddingTop: "0.1em", paddingBottom: "-0.6em" }}>
            <IconButton onClick={handleRemoveClick}>
                <CloseIcon />
            </IconButton>
            <Typography
            variant="body1"
                style={{
                    textAlign: "left",
                    color: "white",
                    textDecoration: todo.completed ? "line-through" :null
                }}
            >
                {todo.task}
            </Typography>
            <Checkbox type="checkbox" onClick={handleCheckboxClick} />
        </ListItem>
    );
}

export default Todo;