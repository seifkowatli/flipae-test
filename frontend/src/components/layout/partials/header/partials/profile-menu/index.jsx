import { Logout } from '@mui/icons-material';
import { Avatar, Box, Button, Chip, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useNavigate } from 'react-router-dom';
import { useApp } from '~/providers';
import { styles } from './styles';


const storageUrl = import.meta.env.VITE_API_HOST;


const ProfileMenu = () => {
  const navigate = useNavigate();
  const { logout, App } = useApp();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    logout();
    navigate('/auth/login');
  };

  return (
    <div>
      <Button
        variant="text"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <Chip
          sx={{ cursor: 'pointer' }}
          avatar={
            <Avatar
              alt={App?.user?.full_name_en[0].toUpperCase()}
              src={`${storageUrl}/${App?.user?.avatar?.path}`}
            ></Avatar>
          }
          label={App?.user?.full_name_en}
        />
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 140,
          horizontal: -30,
        }}
        keepMounted
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            navigate('/dashboard');
          }}
        >
          <FormattedMessage id="home" />
        </MenuItem>

        <MenuItem
          onClick={() => {
            handleClose();
            navigate('/profile');
          }}
        >
          <FormattedMessage id="profile" />
        </MenuItem>

        <MenuItem onClick={handleLogout}>
          <Box sx={styles.logoutBtn}>
            <FormattedMessage id="logout" />
            <Logout sx={{ width: 20, height: 20 }} />
          </Box>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileMenu;
