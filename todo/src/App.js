import React, { useEffect, useState } from 'react';
import './App.css';
import TodoListApp from './components/TodoListApp';
import Typography from '@material-ui/core/Typography';

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  return (
      <div className="App">
        <div style={{ padding: 16 }}>
            <Typography id="head" style={{ padding: 16, marginBottom: "0.5em" }} variant="h1">TODOS</Typography>
              <TodoListApp
                todos={todos} 
              />
        </div>
      </div>
  );
}

export default App;
