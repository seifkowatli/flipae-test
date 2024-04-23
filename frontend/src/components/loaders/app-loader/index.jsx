import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { styles } from './styles';

export default function CircularIndeterminate({children}) {
  return (
    <Box sx={styles.root}>
      <CircularProgress />
      {children}
    </Box>
  );
}
