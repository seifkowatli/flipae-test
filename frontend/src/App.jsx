import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { GlobalNotification } from './components';
import {
  AppProvider,
  EmotionCacheProvider,
  I18nProvider,
  ThemeProvider,
  ReactQueryProvider,
  NotificationsProvider,
} from './providers';

import Routes from './routes';

function App() {
  return (
    <ReactQueryProvider>
      <AppProvider>
        <ThemeProvider>
          <EmotionCacheProvider>
            <I18nProvider>
              <NotificationsProvider>
                <GlobalNotification />
                <Router>
                  <Routes />
                </Router>
              </NotificationsProvider>
            </I18nProvider>
          </EmotionCacheProvider>
        </ThemeProvider>
      </AppProvider>
    </ReactQueryProvider>
  );
}

export default App;
