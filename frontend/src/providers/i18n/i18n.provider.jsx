import React from 'react';
import { IntlProvider } from 'react-intl';
import { useApp } from '../app.provider';

import enMessages from './messages/en';
import arMessages from './messages/ar';

//ENHANCEMENT figure out how to get these message from an api
export const Messages = {
  en: enMessages,
  ar: arMessages,
};

export const Langs = {
  ar: 'العربية',
  en: 'English',
};

export function I18nProvider({ children }) {
  const { App } = useApp();
  const messages = Messages[App?.preferences?.lang];

  return (
    <IntlProvider locale={App?.preferences?.lang} messages={messages}>
      {children}
    </IntlProvider>
  );
}
