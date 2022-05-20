import cl from "classnames";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import IconButton from "../../../components/UI/buttons/IconButton/IconButton";
import { useForm } from "../../../hooks/useForm";
import scss from "./searchForm.module.scss";

const SearchForm: FC<{ loaded: boolean }> = ({ loaded }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { values, handleChange, handleSubmit, isValid } = useForm({
    defaultValues: { text: searchParams.get("text") || "" },
    onSubmit: (values) => {
      // console.log(values);
      setSearchParams(values);
      // resetForm();
    },
    // validationScheme,
    // validateOnMount: true,
    // TODO: validate
  });

  return (
    <section className={scss.root}>
      <h1 className={scss.title}>Поиск</h1>
      <form
        onSubmit={handleSubmit}
        className={cl(scss.form, loaded && scss.loaded)}
      >
        <input
          type="text"
          name="text"
          value={values.text}
          onChange={handleChange}
          placeholder="Поиск"
          disabled={loaded}
          className={scss.input}
          multiple
          autoComplete="off"
        />

        {/* TODO: create component */}
        <IconButton
          type="submit"
          disabled={loaded || !isValid}
          className={scss.submit}
        />
      </form>
    </section>
  );
};

export default SearchForm;