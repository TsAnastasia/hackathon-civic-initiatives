import { useEffect, useState } from "react";
import { useDocTitle } from "../../hooks/useDocTitle";
import { UserNotification } from "../../types/notification";
import NotificationsItem from "./item/NotificationsItem";
import styles from "./notificationPage.module.scss";

// TODO: add to app store
const defaultNotifications: UserNotification[] = [
  {
    id: "111-011",
    date: "2021-12-14T14:57:17.604Z",
    comment: "Создана инициатива",
    title: "Уборка снега",
    readed: false,
  },
  {
    id: "111-004",
    date: "2021-12-14T14:57:17.604Z",
    comment: "Добавлен комментарий",
    title: "Уборка снега во дворе",
    readed: false,
  },
  {
    id: "111-002",
    date: "2021-12-13T14:57:17.604Z",
    comment: "Ваша инициатива понравилась 2 людям",
    title: "Уборка снега",
    readed: true,
  },
  {
    id: "111-001",
    date: "2021-12-12T14:57:17.604Z",
    comment: "Ваша инициатива взята в работу",
    title: "Уборка снега",
    readed: true,
  },
];

const NotificationsPage = () => {
  useDocTitle("Уведомления");

  const [notifications, setNotifications] = useState(defaultNotifications);

  const handleReadNotification = (id: string) => {
    setNotifications((state) =>
      state.map((item) => (item.id === id ? { ...item, readed: true } : item))
    );
  };

  useEffect(() => {
    console.log("render notification page");
  });

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>УВЕДОМЛЕНИЯ</h1>
      <ul className={styles.list}>
        {notifications.map((notification) => (
          <li key={notification.id} className={styles.item}>
            <NotificationsItem
              notification={notification}
              onRead={handleReadNotification}
            />
          </li>
        ))}
      </ul>
      {}
    </section>
  );
};

export default NotificationsPage;
