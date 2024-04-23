import { Box, Button, Drawer, Toolbar } from '@mui/material';
import { navigationData } from '~/routes/navigation.data';
import { drawerRenderer } from './actions';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';
import { Home } from '@mui/icons-material';
import { FormattedMessage } from 'react-intl';

const AppDrawer = ({ isSm, drawerOpen, toggleMenu }) => {
  const navigate = useNavigate()
  return (
    <Drawer
      variant={isSm ? 'temporary' : 'permanent'}
      onClose={toggleMenu}
      open={drawerOpen}
      sx={styles.root}
    >
      <Toolbar />
      <Button
        onClick={() => navigate('/dashboard')}
        startIcon={<Home />}
        variant="contained"
        color='info'
        sx={{ mx : 1 , mt : 2 }}
      >
        <FormattedMessage id="home" />
      </Button>
      <Box sx={styles.wrapper}>{drawerRenderer(navigationData)}</Box>
    </Drawer>
  );
};

export default AppDrawer;
