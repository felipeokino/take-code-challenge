import useNotifications from '../../utils/useNotifications';
import Icon from '../Icon';

import { NotificationBadge, NotificationContainer } from './styles';

export default function Notification() {
  const { notifications } = useNotifications();

  return (
    <NotificationContainer>
      <Icon icon='notification' isButton />
      <NotificationBadge data-testid='notification-badge'>
        {notifications.length}
      </NotificationBadge>
    </NotificationContainer> 
  );
}