import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

import { BsCodeSlash } from 'react-icons/bs';

import style from './Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <div className={style.container}>
        <div className={style.logo}>
          <BsCodeSlash />
        </div>
        <div>
          <h1>Portfólio</h1>
        </div>
        <button className={style.toggle} onClick={toggleTheme}></button>
      </div>
    </header>
  );
};

export default Header;
