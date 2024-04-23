import { Menu, MenuOpen } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { ReactComponent as Logo } from '~/assets/logo.svg';
import { LangSelector, Search, ThemeToggler } from './partials';
import { styles } from './styles';

const Header = ({ isSm, toggleMenu, drawerOpen }) => {
  
  return (
    <AppBar position="fixed" color="transparent" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.contentLeft}>
          {isSm && ( 
            <IconButton sx={styles.drawerToggler} onClick={toggleMenu}>
              {drawerOpen ? <MenuOpen /> : <Menu />}
            </IconButton>
          )}
          <Logo style={styles.logo} />
          {!isSm && (
            <Typography noWrap variant="h5" component="h1" sx={styles.appTitle}>
              |  Test 
            </Typography>
          )}
        </Box>
        <Box sx={styles.contentRight}>
          {!isSm && <Search />}
          <ThemeToggler />
          <LangSelector />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

// set props types

export default Header;
