import React, { FC, FormEvent } from 'react';
import cl from './MyButton.module.css';

interface Props {
  children?: React.ReactNode;
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
  className?: string;
}

const MyButton: FC<Props> = ({ children, className, onClick }: Props) => {
  return (
    <div className={className}>
      <button className={cl.myBtn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default MyButton;
