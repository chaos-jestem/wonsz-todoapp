import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/adminpanel/TodoForm';
import TodoList from './components/adminpanel/TodoList';
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function Adminpanel() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    )
  }
  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  return (
    <div className="App">
      <div id="head">
        <Typography  style={{ padding: 10 }} variant="h1">TODO</Typography>
      </div>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
    </div>
  );
}

export default Adminpanel;
