import { FC, useCallback, useState } from "react";
import { Comment } from "../../../types/initiative";
import InitiativeCommentsForm from "./form/InitiativeCommentsForm";
import InitiativeCommentsItem from "./item/InitiativeCommentsItem";
import scss from "./initiativeComments.module.scss";

const InitiativeComments: FC<{ comments: Comment[] }> = ({
  comments: commentsAPI,
}) => {
  // API: get intitiative comments
  const [comments, setComments] = useState(commentsAPI);

  // API: create initiative comment
  const handleAddNewComment = useCallback((newComment: Comment) => {
    setComments((state) => state.concat(newComment));
  }, []);

  return (
    <section className={scss.root}>
      <h2 className={scss.title}>Комментарии</h2>
      {comments.length > 0 ? (
        <ul className={scss.comments}>
          {comments.map((comment) => (
            <li key={comment.id} className={scss.item}>
              <InitiativeCommentsItem comment={comment} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={scss.message}>Нет комментариев</p>
      )}
      <InitiativeCommentsForm onSubmit={handleAddNewComment} />
    </section>
  );
};

export default InitiativeComments;
