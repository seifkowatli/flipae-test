export const styles = {
  root: isOpen => [
    {
      position: 'fixed',
      zIndex: 99,
      bottom: -50,
      right: 20,
      width: 1,
      maxWidth: 450,
      transition: 'all ease .4s',
    },
    isOpen && {
      transform: 'translateY(-70px)',
    },
  ],
  message: {
    maxWidth: 600,
  },
};
