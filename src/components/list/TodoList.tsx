import React, { FC } from "react";
import cl from "./TodoList.module.css";
import TodoListItem from "../item/TodoListItem";

interface Props {
  todos: Todo[];
  toggleTodo: ToggleTodo;
  remove: RemoveTodo;
}

const TodoList: FC<Props> = ({todos, toggleTodo, remove}) => {

  return (
    <div className={cl.list}>
      {todos.map((todo)=> (
      <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodoItem={remove} />
      ))}
    </div>
  );
};

export default TodoList;
