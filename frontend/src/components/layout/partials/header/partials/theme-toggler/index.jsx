import React from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import { useApp } from '~/providers';

const ThemeToggler = () => {
  const { App, updatePreferences } = useApp();

  const getNewTheme = oldTheme => (oldTheme === 'dark' ? 'light' : 'dark');

  const toggleTheme = () =>
    updatePreferences({
      theme: getNewTheme(App.preferences.theme),
    });

  return (
    <Tooltip title={`${getNewTheme(App.preferences.theme)} theme`}>
      <IconButton onClick={toggleTheme}>
        {App.preferences.theme === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ThemeToggler;
