import React, {FC, FormEvent} from 'react';
import cl from './Button.module.css';

interface Props {
  children?: React.ReactNode;
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({children, ...props}: Props) => {
  return (
    <div>
       <button {...props} className={cl.btn}>
        {children}
       </button>
    </div>
  );
};

export default Button;