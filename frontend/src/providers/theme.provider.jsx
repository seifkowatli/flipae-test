import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useApp } from './';
import CssBaseline from '@mui/material/CssBaseline';

/**
 * YEP Colors
 * blue #086cb3
 * light blue #64c5de
 * green #61bc81
 * orange #f37759
 * yellow #30a7de
 */

export const palette = theme => {
  let color = theme === 'dark' ? '#03aeff' : '#086cb3';
  return {
    primary: { main: color },
    secondary: { main: color },
  };
};

export function ThemeContextProvider({ children }) {
  const { App } = useApp();
  const theme = createTheme({
    direction: App?.preferences?.lang === 'ar' ? 'rtl' : 'ltr',
    palette: {
      ...palette(App?.preferences?.theme),
      mode: App?.preferences?.theme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
