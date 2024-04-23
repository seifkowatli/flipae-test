export const styles = {
  appBar: {
    zIndex: theme => theme.zIndex.drawer + 1,
    backdropFilter: 'blur(20px)',
  },
  toolbar: {
    w: 1,
  },
  appTitle: {
    display: 'flex',
    alignItems: 'center',
  },
  contentLeft: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '& svg * ' : theme =>  ({ 
      fill : theme.palette.mode === 'dark' ? 'white' : 'black',
    })
  },
  contentRight: {
    flexGrow: 1,
    gap: 0.4,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  drawerToggler: {
    width: 50,
    height: 50,
  },
  logo : {
    width: 60,
    height: 60,
    margin : 5,
  }
};
