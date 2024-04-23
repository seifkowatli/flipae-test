import {
  createContext, useCallback, useContext,
  useState
} from 'react';
import { storageKeys } from '~/configs';
import { useLocalStorage } from '~/hooks';

export const APP_INITIAL_STATE = {
  isAuthenticated: false,
  loading: false,
  preferences: {
    lang: 'en', // [ar, en]
    theme: 'light', // [light , dark]
  },
};

// initializing context
export const AppContext = createContext(APP_INITIAL_STATE);

// setting a helper function to use context
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  const [appPreferences, setPreferences] = useLocalStorage(
    storageKeys.preferences,
    APP_INITIAL_STATE.preferences
  );

  const [App, setApp] = useState({
    ...APP_INITIAL_STATE,
    preferences: appPreferences,
  });

  const updatePreferences = useCallback(
    updatedPreferences => {
      setApp(prevState => ({
        ...prevState,
        preferences: {
          ...prevState.preferences,
          ...updatedPreferences,
        },
      }));

      setPreferences(prevPreferences => ({
        ...prevPreferences,
        ...updatedPreferences,
      }));
    },
    [appPreferences]
  );



  return (
    <AppContext.Provider value={{ App,setApp, updatePreferences }}>
      {children}
    </AppContext.Provider>
  );
}
