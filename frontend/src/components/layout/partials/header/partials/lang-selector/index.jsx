import { Language as LangsIcon } from '@mui/icons-material';
import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Langs, useApp } from '~/providers';

export default function PositionedMenu() {
  const { formatMessage: t  } = useIntl();
  const { App, updatePreferences } = useApp();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = lang => {
    updatePreferences({ lang });
    handleClose();
  };
  return (
    <Box sx={{height : 1 , aspectRatio: '1 / 1'}}>
      <IconButton
        color="inherit"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ aspectRatio: '1/1', display: 'flex', gap: 0.5 , height : 1 , borderRadius : 3}}
      >
        <Typography variant="body1">{t({id : App?.preferences.lang})} </Typography>
        <LangsIcon />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
        {Object.keys(Langs).map((langKey, index) => (
          <MenuItem
            key={`lang-item-${index}`}
            onClick={() => handleSelect(langKey)}
          >
            {Langs[langKey]}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
