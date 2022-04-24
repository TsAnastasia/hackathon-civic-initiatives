import cl from "classnames";
import { FC } from "react";
import { UserNotification } from "../../../types/notification";
import { formatDateFromString } from "../../../utils/date";
import styles from "./notificationItem.module.scss";

const NotificationsItem: FC<{
  notification: UserNotification;
  onRead: (id: string) => void;
}> = ({ notification: { id, comment, date, title, readed }, onRead }) => {
  const handleRead = () => {
    !readed && onRead(id);
  };

  return (
    <article
      onMouseEnter={handleRead}
      className={cl(styles.root, readed && styles.root_read)}
    >
      <p className={styles.date}>{formatDateFromString(date)}</p>
      <h3 className={styles.title}>{comment}</h3>
      <p className={styles.tag}>{title}</p>
    </article>
  );
};

export default NotificationsItem;
