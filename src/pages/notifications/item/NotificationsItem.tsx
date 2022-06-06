import cl from "classnames";
import { FC } from "react";
import { UserNotification } from "../../../types/notification";
import { formatDateFromString } from "../../../utils/date";
import scss from "./notificationItem.module.scss";

const NotificationsItem: FC<{
  notification: UserNotification;
  onRead: (id: string) => void;
}> = ({ notification: { id, comment, date, title, readed }, onRead }) => {
  const handleRead = () => {
    !readed && onRead(id);
  };

  return (
    <article
      aria-hidden
      onClick={handleRead}
      className={cl(scss.root, readed && scss.root_read)}
    >
      <p className={scss.date}>{formatDateFromString(date)}</p>
      <h3 className={scss.title}>{comment}</h3>
      <p className={scss.tag}>{title}</p>
    </article>
  );
};

export default NotificationsItem;
