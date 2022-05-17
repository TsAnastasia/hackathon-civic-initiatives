import { FC } from "react";
import UserAvatar from "../../../../components/UserAvatar/UserAvatar";
import { Comment } from "../../../../types/initiative";
import { formatDateFromString } from "../../../../utils/date";
import scss from "./initiativeCommentsItem.module.scss";

const InitiativeCommentsItem: FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <article className={scss.root}>
      <UserAvatar user={comment.author} className={scss.avatar} />
      <div>
        <h3 className={scss.name}>{comment.author.fullName}</h3>
        <p className={scss.text}>{comment.text}</p>
        <p className={scss.date}>{formatDateFromString(comment.date)}</p>
      </div>
    </article>
  );
};

export default InitiativeCommentsItem;
