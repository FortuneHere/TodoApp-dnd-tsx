import React, { FC, FormEvent } from 'react';
import Button from '../UI/button/Button';
import MyInput from '../UI/input/MyInput';
import cl from './TodoForm.module.css';

interface Props {
  addTodo: AddTodo;
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}

const TodoForm: FC<Props> = ({ newTodo, setNewTodo, addTodo }) => {
  const handleClear = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setNewTodo('');
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form className={cl.myForm}>
      <MyInput newTodo={newTodo} setNewTodo={setNewTodo} />
      <Button onClick={handleSubmit}>Post</Button>
      <Button onClick={handleClear}>X</Button>
    </form>
  );
};

export default TodoForm;
