import { FC } from "react";
import { Comment } from "../../../types/initiative";

const InitiativeComments: FC<{ comments: Comment[] }> = ({ comments }) => {
  return (
    <section>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.author.fullName}</li>
      ))}
    </section>
  );
};

export default InitiativeComments;
