// TODO: add to app store

import { FC } from "react";
import { UserNotification } from "../../../types/notification";

const NotificationsItem: FC<{
  notification: UserNotification;
  onRead: (id: string) => void;
}> = ({ notification: { id, comment, date, title, readed }, onRead }) => {
  const handleRead = () => {
    !readed && onRead(id);
  };

  return (
    <article onMouseEnter={handleRead}>
      <p>{`${readed}`}</p>
      <p>{date}</p>
      <h3>{comment}</h3>
      <p>{title}</p>
    </article>
  );
};

export default NotificationsItem;
