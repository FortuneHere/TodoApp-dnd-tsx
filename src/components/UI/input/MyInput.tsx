import React, { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';

interface Props {
  newTodo: string;
  setNewTodo: Dispatch<SetStateAction<string>>;
}



const MyInput: FC<Props> = ({newTodo, setNewTodo, }) => {  
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  return (
    <div>
          <input
        type="text"
        placeholder="What are your plans?"
        value={newTodo}
        onChange={handleChange}
      />
    </div>
  );
};

export default MyInput;
