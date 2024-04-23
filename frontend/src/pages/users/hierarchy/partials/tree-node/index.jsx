import React from 'react';
import Typography from '@mui/material/Typography';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { styles } from './styles';
import { Box, useTheme } from '@mui/material';

const TreeNode = ({ testIdPrefix = '', ...props }) => {
  const { id } = props.node;
  const indent = props.depth;
  const {direction} = useTheme();
  const handleToggle = e => {
    e.stopPropagation();
    props.onToggle(props.node.id);
  };

  return (
    <Box
      sx={{ ...styles.root, paddingInlineStart: indent }}
      data-testid={`${testIdPrefix}custom-node-${id}`}
    >
      <Box sx={styles.container}>
        {props.hasChild ? (
          <Box sx={styles.arrow} onClick={handleToggle}>
            {direction === 'rtl' ? (
              <ArrowLeftIcon
                sx={{ transform: props.isOpen ? 'rotate(-90deg)' : 'none' }}
                data-testid={`arrow-right-icon-${id}`}
              />
            ) : (
              <ArrowRightIcon
                sx={{ transform: props.isOpen ? 'rotate(90deg)' : 'none' }}
                data-testid={`arrow-right-icon-${id}`}
              />
            )}
            <Box sx={styles.label}>
              <Typography variant="body1">{props.node.text}</Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={styles.label}>
            <Typography variant="body1">{props.node.text}</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default TreeNode;
