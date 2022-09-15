import React, { FC, FormEvent } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { BiTrash } from 'react-icons/bi';
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
  // We have to use it, cause of CSS module
  const completedClass = todo.complete ? cl.isCompleted : '';

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <div
          className={`${cl.todoItem} ${completedClass}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className={cl.checkboxOne}>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => toggleTodo(todo)}
            />{' '}
          </div>
          <div className={cl.todoItem__name}>
            <p>{todo.task}</p>
          </div>
          <MyButton className={cl.todoItem_Btn} onClick={handleRemove}>
            <BiTrash size={24} />
          </MyButton>
        </div>
      )}
    </Draggable>
  );
};

export default TodoItem;
