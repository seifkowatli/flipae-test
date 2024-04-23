import { Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Suspense, useState } from 'react';
import { AppLoader } from '../loaders';
import { Breadcrumbs, Drawer, Header } from './partials';
import { styles } from './styles';

const ClippedDrawer = ({ children }) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isSm = useMediaQuery(theme.breakpoints.down('md'));

  const toggleMenu = () => setDrawerOpen(!drawerOpen);

  const sharedProps = { isSm, drawerOpen, toggleMenu };

  return (
    <Box sx={styles.layoutWrapper}>
      <CssBaseline />
      <Header {...sharedProps} />
      <Drawer {...sharedProps} />
      <Suspense fallback={<AppLoader />}>
        <Box component="main" sx={styles.root}>
          <Toolbar />
          <Breadcrumbs />
          {children}
        </Box>
      </Suspense>
    </Box>
  );
};

export default ClippedDrawer;
