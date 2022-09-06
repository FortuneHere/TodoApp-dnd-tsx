import React, { FC, useState } from 'react';
import './styles/App.css';
import data from './data.json';
import TodoList from './components/list/TodoList';
import TodoForm from './components/form/TodoForm';
import Header from './components/UI/header/Header';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const initialTodos: Todo[] = data;

// a little function to help us with reordering the result
const reorder = (
  list: Todo[],
  startIndex: number,
  endIndex: number
): Todo[] => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App: FC = () => {
  // All todos list
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState<string>('');

  // Creating new todo item
  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([
        ...todos,
        {
          id: Math.round(Date.now() * 0.012345),
          task: newTodo,
          complete: false,
        },
      ]);
  };

  // Deleting todo item
  const removeTodo: RemoveTodo = (todo) => {
    setTodos(todos.filter((td) => td.id !== todo.id));
  };

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

  const onDragEnd = (result: DropResult) => {
    // droppped outisde the list
    if (!result.destination) {
      return;
    }

    const tasks: Todo[] = reorder(
      todos,
      result.source.index,
      result.destination.index
    );

    // let add: Todo;
    // let list = todos;

    // if (source.droppableId === 'TodoList') {
    //   add = list[source.index];
    //   list.splice(source.index, 1);
    // }

    // if (destination.droppableId === 'TodoList') {
    //   list.splice(destination.index, 0, add);
    // }

    setTodos(tasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="app">
        <div className="page">
          <Header />
          <TodoForm
            addTodo={addTodo}
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
          {/* передать onDragStart/Over/Drop итемам */}
          <TodoList todos={todos} toggleTodo={toggleTodo} remove={removeTodo} />
        </div>
      </div>
    </DragDropContext>
  );
};

export default App;
