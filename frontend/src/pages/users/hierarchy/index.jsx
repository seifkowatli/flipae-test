import {
  DndProvider,
  MultiBackend,
  Tree,
  getBackendOptions,
} from '@minoru/react-dnd-treeview';
import { Box, Paper, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useUser } from '~/hooks';
import { isEmpty } from '~/utils';
import { getTreeData } from './actions';
import DragView from './partials/drag-view';
import TreeNode from './partials/tree-node';
import { styles } from './styles';
import { FormattedMessage } from 'react-intl';

const UsersHierarchy = () => {
  const [treeData, setTreeData] = useState([]);
  const { getUsers } = useUser();
  const { data, isLoading } = getUsers();

  const handleDrop = newTree => setTreeData(newTree);

  useEffect(() => {
    if (!isEmpty(data)) {
      setTreeData(getTreeData(data));
    }
  }, [data]);

  if (!treeData) return 'Loading...';
  return (
    <Paper sx={{ m: 2 }}>
      <Stack>
        <Box p={2} >
          <Typography variant="h4"> <FormattedMessage id='hierarchy.header' /> </Typography>
          <Typography variant="caption">
            <FormattedMessage id='hierarchy.captions' />
          </Typography>
        </Box>
        <DndProvider backend={MultiBackend} options={getBackendOptions()}>
          <Box sx={styles.app}>
            <Tree
              tree={treeData}
              rootId={0}
              render={(node, options) => <TreeNode node={node} {...options} />}
              dragPreviewRender={monitorProps => (
                <DragView monitorProps={monitorProps} />
              )}
              onDrop={handleDrop}
              classes={{
                root: 'treeRoot',
                draggingSource: 'draggingSource',
                dropTarget: 'dropTarget',
              }}
            />
          </Box>
        </DndProvider>
      </Stack>
    </Paper>
  );
};

export default UsersHierarchy;
