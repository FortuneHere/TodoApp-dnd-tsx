import React from 'react';
import cl from './MyHead.module.css';
import { BiNotepad } from 'react-icons/bi';
import { SiTypescript, SiReact } from 'react-icons/si';

const MyHead = () => {
  return (
    <div className={cl.head}>
      <h1 className={cl.title}>
        Todo list.
        <span>
          tsx <BiNotepad id={cl['notepad']} />
          <SiReact id={cl['react']} />
          <SiTypescript id={cl['typescript']} />
        </span>
      </h1>
    </div>
  );
};

export default MyHead;
