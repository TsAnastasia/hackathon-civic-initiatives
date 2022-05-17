import { FC } from "react";
import { Comment } from "../../../types/initiative";
import InitiativeCommentsForm from "./form/InitiativeCommentsForm";
import InitiativeCommentsItem from "./item/InitiativeCommentsItem";
import scss from "./initiativeComments.module.scss";

const InitiativeComments: FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <section className={scss.root}>
      <h2>Комментарии</h2>
      {comments.length > 0 ? (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <InitiativeCommentsItem comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Нет комментариев</p>
      )}
      <InitiativeCommentsForm />
    </section>
  );
};

export default InitiativeComments;
