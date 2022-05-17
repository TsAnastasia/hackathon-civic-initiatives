import cl from "classnames";
import { FC } from "react";
import { User } from "../../types/users";
import DefaultAvatar from "../../assets/images/initial-avatar.svg";
import scss from "./userAvatar.module.scss";

const UserAvatar: FC<{ user: User; className?: string }> = ({
  user,
  className,
}) => {
  return (
    <img
      src={user.avatar || DefaultAvatar}
      alt={user.fullName}
      className={cl(scss.image, className)}
    />
  );
};

export default UserAvatar;
