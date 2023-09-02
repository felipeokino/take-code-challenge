import { useEffect, useState } from 'react';

type Notitification = {
    id: string;
    title: string;
    description: string;
    created_at: string;
};
export default function useNotifications() {
  const [ notifications, setNotifications ] = useState<Notitification[]>([]);

  const genNotification = (): Notitification[] => {
    const notificationlist: Notitification[] = [];
    notificationlist.length = Math.floor(Math.random() * (10 - 1 + 1) + 1);
    return notificationlist.fill({
      id: '',
      title: 'Notificação',
      description: 'Descrição',
      created_at: new Date().toLocaleDateString('pt-br')
    }, 0, notificationlist.length).map((notif, id) => ({ ...notif, id: `${id}` })) as Notitification[];
  };
  const fetchNotifications = async () => {
    const fakeRequest = new Promise<Notitification[]>(resolve => {
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