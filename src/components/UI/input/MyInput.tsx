import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import cl from './MyInput.module.css';

interface Props {
  newTodo: string;
  setNewTodo: Dispatch<SetStateAction<string>>;
  className: string;
}

const MyInput: FC<Props> = ({ newTodo, setNewTodo, className }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div className={cl.inputContainer}>
      <input
        className={className}
        type="text"
        // placeholder triggers label CSS animation
        placeholder=" "
        value={newTodo}
        onChange={handleChange}
      />
      <label>What are your plans?</label>
    </div>
  );
};

export default MyInput;
