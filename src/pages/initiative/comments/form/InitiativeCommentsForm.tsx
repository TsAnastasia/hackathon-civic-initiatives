import cl from "classnames";
import { FC, useState } from "react";
import IconButton from "../../../../components/UI/buttons/IconButton/IconButton";
import { useForm } from "../../../../hooks/useForm";
import { Comment } from "../../../../types/initiative";
import { TIMEOUT_API } from "../../../../utils/constants";
import scss from "./initiativeCommentsForm.module.scss";
import { validationScheme } from "./InitiativeCommentsFormValidate";

const InitiativeCommentsForm: FC<{
  onSubmit: (newComment: Comment) => void;
}> = ({ onSubmit }) => {
  const [loaded, setLoaded] = useState(false);

  const { values, handleChange, handleSubmit, isValid, resetForm } = useForm<{
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
        resetForm();
      }, TIMEOUT_API);
    },
    validationScheme,
    validateOnMount: true,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className={cl(scss.root, loaded && scss.loaded)}
    >
      <input
        type="text"
        name="text"
        value={values.text}
        onChange={handleChange}
        placeholder="Добавить комментарий"
        disabled={loaded}
        className={scss.input}
        multiple
      />

      <IconButton
        type="submit"
        disabled={loaded || !isValid}
        className={scss.submit}
      />
    </form>
  );
};

export default InitiativeCommentsForm;
