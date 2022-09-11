import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import cl from './MyInput.module.css';

interface Props {
  newTodo: string;
  setNewTodo: Dispatch<SetStateAction<string>>;
}

const MyInput: FC<Props> = ({ newTodo, setNewTodo }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className={cl.inputContainer}>
      <input
        type="text"
        placeholder=" "
        value={newTodo}
        onChange={handleChange}
      />
      <label>What are your plans?</label>
    </div>
  );
};

export default MyInput;
