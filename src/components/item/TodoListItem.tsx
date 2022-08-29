import React, { FC, FormEvent } from "react";
import Button from "../UI/button/Button";
import cl from "./TodoListItem.module.css";

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
  removeTodoItem: RemoveTodo;

}
const TodoListItem: FC<Props> = ({ todo, toggleTodo, removeTodoItem }) => {

  const handleRemove = ( e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    removeTodoItem(todo)
  }

  return (
    <div className={cl.todoItem}>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo)}
      />{' '}
      <div>
        <p
          style={{ textDecoration: todo.complete ? "line-through" : undefined }}
        >
          {todo.task}
        </p>
      </div>
      <Button onClick={handleRemove}>
        <i>-</i>
      </Button>
    </div>
  );
};

export default TodoListItem;
