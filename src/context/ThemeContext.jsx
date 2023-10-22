import { createContext, useState } from 'react';
import { defaultTheme, darkTheme } from '../styles/Themes.styles';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  console.log(theme);

  const toggleTheme = () => {
    if (theme.name === 'light') {
      setTheme(darkTheme);
    } else if (theme.name === 'dark') {
      setTheme(defaultTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
