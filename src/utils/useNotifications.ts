import { useEffect, useState } from 'react';

export type NotificationProps = {
    id: string;
    title: string;
    description: string;
    created_at: string;
};
export default function useNotifications() {
  const [ notifications, setNotifications ] = useState<NotificationProps[]>([]);

  const genNotification = (): NotificationProps[] => {
    const notificationlist: NotificationProps[] = [];
    notificationlist.length = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return notificationlist.fill({
      id: '',
      title: 'Notificação',
      description: 'Descrição',
      created_at: new Date().toLocaleDateString('pt-br')
    }, 0, notificationlist.length).map((notif, id) => ({ ...notif, id: `${id}` })) as NotificationProps[];
  };
  const fetchNotifications = async () => {
    const fakeRequest = new Promise<NotificationProps[]>(resolve => {
      resolve(genNotification());
    });

    await fakeRequest.then(value => {
      setNotifications(value);
    });
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return {
    notifications,
  };
}