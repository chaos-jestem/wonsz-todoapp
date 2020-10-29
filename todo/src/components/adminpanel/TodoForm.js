import { TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Button.css';
function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });
    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }
    function handleSubmit(e) {
        e.preventDefault();
        if(todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() });
            setTodo({ ...todo, task: "" });
        }
    }
    return(
      <form style={{color: "white", marginBottom: "0.6em"}} onSubmit={handleSubmit}>
          <TextField id="border"
            style={{color: "white"}}
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
          />
          <Button type="submit">DODAJ</Button>
      </form>  
    );
}

export default TodoForm;