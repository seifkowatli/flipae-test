import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { useApp } from '.';
import { useEffect } from 'react';


const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: 'muiltr',
});
 

export const EmotionCacheProvider = ({ children }) => {
  const { App } = useApp();
  const isRtl = () => App.preferences.lang === 'ar';

  useEffect(() => {
    if(isRtl()) document.dir = 'rtl';
    else document.dir = 'ltr';
  }, [])
  
  return (
    <CacheProvider value={isRtl() ? cacheRtl : cacheLtr}>
      <Box dir={isRtl() ? 'rtl' : 'ltr'}>{children}</Box>
    </CacheProvider>
  );
};
