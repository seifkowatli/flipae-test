import { Box, Stack, Typography } from '@mui/material';
import { ReactComponent as WelcomeImage } from '~/assets/welcome.svg';
import { ReactComponent as Logo } from '~/assets/logo.svg';

const Home = () => {
  return (
    <Stack alignItems="center">
      <Stack direction="row" p={2} alignItems="center">
      <Typography variant="h4" pt={1} mr={1}> Welcome to   flip AE Test</Typography>

      </Stack>
      <Box sx={{maxWidth : 600 , maxHeight : 500 , p : 3 , pt : 5}}>
        <WelcomeImage style={{width : '100%'  , height : '100%'}  } />
      </Box>
        
    </Stack>
  );
};

export default Home;
