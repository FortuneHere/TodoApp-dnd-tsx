import React, { FC, FormEvent } from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: (e: FormEvent<HTMLButtonElement>) => void;
  className?: string;
}

const MyButton: FC<Props> = ({ children, ...props }: Props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default MyButton;
