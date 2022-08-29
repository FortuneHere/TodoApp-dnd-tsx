import React, { FC, useState } from "react";
import "./styles/App.css";
import data from "./data.json";
import TodoList from "./components/list/TodoList";
import TodoForm from "./components/form/TodoForm";
import Header from "./components/UI/header/Header";

const initialTodos: Todo[] = data;

const App: FC = () => {
  // All todos list
  const [todos, setTodos] = useState<Array<Todo>>(initialTodos);

  // Check/uncheck finished todo
  const toggleTodo: ToggleTodo = (selectedTodo: Todo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  // Creating new todo item
  const addTodo: AddTodo = (newTodoTitle, newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { id: Math.round( Date.now() * 0.012345), task: newTodo, complete: false }]);
  };

  // Deleting todo item
  const removeTodo: RemoveTodo= (todo) => {
    setTodos(todos.filter(td => td.id !== todo.id))
  }
  
  return (
    <div className="app">
      <div className="page">
        <Header />
        <TodoForm addTodo={addTodo} />
        {/* передать onDragStart/Over/Drop итемам */}
        <TodoList todos={todos} toggleTodo={toggleTodo} remove={removeTodo} />
      </div>
    </div>
  );
};

export default App;
