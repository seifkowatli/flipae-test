import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Button } from '@mui/material';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';

const StatusMessageBase = ({ title, code, message }) => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.root}>
      <Typography variant="h1" sx={styles.code}>
        {code}
      </Typography>
      <Typography variant="h4" sx={styles.title}>
        {title}
      </Typography>
      <Typography variant="body1" sx={styles.message}>
        {message}
      </Typography>

      <Button variant="outlined" onClick={() => navigate('/')}>
        Back to Home
      </Button>
    </Box>
  );
};

StatusMessageBase.propTypes = {
  title: PropTypes.string.isRequired,
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};

export default StatusMessageBase;
