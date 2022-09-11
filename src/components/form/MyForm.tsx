import React, { FC, FormEvent } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';
import cl from './MyForm.module.css';

interface Props {
  addTodo: AddTodo;
  newTodo: string;
  setNewTodo: React.Dispatch<React.SetStateAction<string>>;
}

const MyForm: FC<Props> = ({ newTodo, setNewTodo, addTodo }) => {
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
    <form className={cl.form}>
      <MyInput newTodo={newTodo} setNewTodo={setNewTodo} />
      <MyButton className={cl.btn__submit} onClick={handleSubmit}>
        Post
      </MyButton>
      <MyButton className={cl.btn__clear} onClick={handleClear}>
        X
      </MyButton>
    </form>
  );
};

export default MyForm;
