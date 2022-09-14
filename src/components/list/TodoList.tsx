import React, { FC } from 'react';
import cl from './TodoList.module.css';
import TodoItem from '../item/TodoItem';
import { Droppable } from 'react-beautiful-dnd';

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  remove: RemoveTodo;
}

const TodoList: FC<Props> = ({ todos, toggleTodo, remove }) => {
  return (
    <div>
      {todos.length !== 0 ? (
        <Droppable droppableId="TodoList">
          {(provided, snapshot) => (
            <div
              className={cl.list}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {todos.map((todo, index) => (
                <TodoItem
                  index={index}
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  removeTodoItem={remove}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ) : (
        <div className={cl.list__head}>
          <span className={cl.blank}>Looks like you don't have any.</span>
        </div>
      )}
    </div>
  );
};

export default TodoList;
