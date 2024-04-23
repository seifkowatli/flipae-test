import { Box } from '@mui/material';
import { styles } from './styles'


const DragView = (props) => {
  const item = props.monitorProps.item;

  return (
    <Box sx={styles.root} data-testid="custom-drag-preview">
      {item.text}
    </Box>
  );
}

export default DragView