import React from 'react';
import cl from './MyHead.module.css';
import { BiNotepad } from 'react-icons/bi';
import { SiTypescript, SiReact } from 'react-icons/si';

const MyHead = () => {
  return (
    <div className={cl.head}>
      <p className={cl.title}>
        Todo list.
        <span>
          tsx <BiNotepad id={cl['notepad']} />
          <SiReact id={cl['react']} />
          <SiTypescript id={cl['typescript']} />
        </span>
      </p>
    </div>
  );
};

export default MyHead;
