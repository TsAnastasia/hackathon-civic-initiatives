import { useCallback, useEffect, useState } from "react";
import { notificationsAPI } from "../../API-data/notifications/notificationsAPI";
import Loader from "../../components/Loader/Loader";
import PageTitle from "../../components/PageTitle/PageTitle";
import { UserNotification } from "../../types/notification";
import { TIMEOUT_API } from "../../utils/constants";
import NotificationsItem from "./item/NotificationsItem";
import scss from "./notificationPage.module.scss";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState<
    undefined | UserNotification[]
  >(undefined);

  const handleReadNotification = useCallback((id: string) => {
    setNotifications(
      (state) =>
        state &&
        state.map((item) => (item.id === id ? { ...item, readed: true } : item))
    );
  }, []);

  useEffect(() => {
    // API: get user notifications
    setTimeout(() => {
      setNotifications(notificationsAPI.getNotifications());
    }, TIMEOUT_API);
  }, []);

  return (
    <section className={scss.section}>
      <PageTitle className={scss.title}>УВЕДОМЛЕНИЯ</PageTitle>
      {notifications ? (
        <ul className={scss.list}>
          {notifications.map((notification) => (
            <li key={notification.id} className={scss.item}>
              <NotificationsItem
                notification={notification}
                onRead={handleReadNotification}
              />
            </li>
          ))}
        </ul>
      ) : (
        <Loader blackout={false} />
      )}
    </section>
  );
};

export default NotificationsPage;
