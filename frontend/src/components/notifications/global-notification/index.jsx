import { useNotifications } from '~/providers';
import NotificationBase from '../base';

const GlobalNotification = () => {
  const { notification, dismiss } = useNotifications();
  
  
  return <NotificationBase {...notification} onClose={dismiss} />;
};

export default GlobalNotification;
