import React from 'react';
import StatusMessageBase from './base';
import { messages } from './data';

export const NotFound = () => <StatusMessageBase {...messages.notFound} />;

export const PageExpired = () => <StatusMessageBase {...messages.pageExpired} />;
