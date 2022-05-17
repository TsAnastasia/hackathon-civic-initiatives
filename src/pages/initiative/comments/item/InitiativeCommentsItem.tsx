import { FC } from "react";
import { Comment } from "../../../../types/initiative";
import { formatDateFromString } from "../../../../utils/date";
import scss from "./initiativeCommentsItem.module.scss";

const InitiativeCommentsItem: FC<{ comment: Comment }> = ({ comment }) => {
  return (
    <article className={scss.root}>
      <div>avatar</div>
      <div>
        <h3>{comment.author.fullName}</h3>
        <p>{comment.text}</p>
        <p>{formatDateFromString(comment.date)}</p>
      </div>
    </article>
  );
};

export default InitiativeCommentsItem;
