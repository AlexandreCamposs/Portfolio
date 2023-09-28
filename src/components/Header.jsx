import React from 'react';
import style from './Header.module.css';
import { BsCodeSlash } from 'react-icons/bs';

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.logo}>
          <BsCodeSlash />
        </div>
        <div>
          <h1>Portfólio</h1>
        </div>
        <button className={style.toggle}></button>
      </div>
    </header>
  );
};

export default Header;
