import React from 'react';
import { styles } from './styles';
import { Alert, Box } from '@mui/material';
import PropTypes from 'prop-types';

const NotificationAlert = ({
  message,
  severity = 'info',
  onClose,
  isOpen,
  customStyles = null,
}) => {
  return (
    <Alert
      sx={customStyles || styles.root(isOpen)}
      severity={severity}
      onClose={onClose}
    >
      <Box sx={styles.message}> {message}</Box>
    </Alert>
  );
};

NotificationAlert.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(['info', 'error', 'success', 'warning']),
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
  customStyles: PropTypes.object,
};

export default NotificationAlert;
