import React, { FC, FormEvent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import MyButton from '../UI/button/MyButton';
import cl from './TodoItem.module.css';

interface Props {
  todo: Todo;
  index: number;
  toggleTodo: ToggleTodo;
  removeTodoItem: RemoveTodo;
}
const TodoItem: FC<Props> = ({ todo, index, toggleTodo, removeTodoItem }) => {
  const handleRemove = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeTodoItem(todo);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={cl.todoItem}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
          />{' '}
          <div>
            <p
              style={{
                textDecoration: todo.complete ? 'line-through' : undefined,
              }}
            >
              {todo.task}
            </p>
          </div>
          <MyButton onClick={handleRemove}>
            <i>-</i>
          </MyButton>
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
