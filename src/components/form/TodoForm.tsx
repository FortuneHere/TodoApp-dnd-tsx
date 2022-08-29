import React, { FC, FormEvent, useState } from "react";
import Button from "../UI/button/Button";
import MyInput from "../UI/input/MyInput";
import cl from "./TodoForm.module.css";

interface Props {
  addTodo: AddTodo;
}

const TodoForm: FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [newTodoTitle, setNewTodoTitle] = useState<string>('');

  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNewTodo("");
    setNewTodoTitle("");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo( newTodoTitle ,newTodo);
    setNewTodo("");
    setNewTodoTitle("");
  };

 
  return (
    <form className={cl.myForm}>
      <MyInput newTodo={newTodo} setNewTodo={setNewTodo}  />
      <Button onClick={handleSubmit}>Post</Button>
      <Button onClick={handleClear}>X</Button>    
    </form>
  );
};

export default TodoForm;
