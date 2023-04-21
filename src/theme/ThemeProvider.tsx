import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from './ThemeContext';

import { useState, FC, ReactNode } from 'react';

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ||
  Theme.LIGHT;

interface Props {
  children: ReactNode;
}

const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <>{children}</>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
