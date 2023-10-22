import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

import { BsCodeSlash } from 'react-icons/bs';

import style from './Header.module.css';
import Switch from 'react-switch';

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
        <Switch
          onChange={toggleTheme}
          checked={theme.name === 'light'}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor="#34495e"
        />
      </div>
    </header>
  );
};

export default Header;
