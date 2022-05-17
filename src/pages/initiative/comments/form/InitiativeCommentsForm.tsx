import { FC, useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { Comment } from "../../../../types/initiative";
import { TIMEOUT_API } from "../../../../utils/constants";
import scss from "./initiativeCommentsForm.module.scss";
import { validationScheme } from "./InitiativeCommentsFormValidate";

const InitiativeCommentsForm: FC<{
  onSubmit: (newComment: Comment) => void;
}> = ({ onSubmit }) => {
  const [loaded, setLoaded] = useState(false);

  const { values, setValues, handleChange, handleSubmit } = useForm<{
    text: string;
  }>({
    defaltValues: { text: "" },
    onSubmit: (values) => {
      setLoaded(true);
      setTimeout(() => {
        onSubmit({
          id: `${Math.random()}`,
          // TODO: from storage
          author: { id: `${Math.random()}`, fullName: "current user" },
          text: values.text,
          date: `${new Date().toJSON()}`,
        });
        setLoaded(false);
        setValues({ text: "" });
      }, TIMEOUT_API);
    },
    validationScheme,
    // validateOnMount: true,
  });

  return (
    <form onSubmit={handleSubmit} className={scss.root}>
      <p>add new</p>

      <input
        type="text"
        name="text"
        value={values.text}
        onChange={handleChange}
        disabled={loaded}
      />
      <button type="submit" disabled={loaded}>
        submit
      </button>
    </form>
  );
};

export default InitiativeCommentsForm;
