import cl from "classnames";
import { FC } from "react";
import { useSearchParams } from "react-router-dom";
import PageTitle from "../../../components/PageTitle/PageTitle";
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
    },
    validationScheme: {
      // TODO: fix type problem
      text: (value: string | boolean) =>
        !value ? "Обязательное поле" : undefined,
    },
    validateOnMount: true,
  });

  return (
    <section className={scss.root}>
      <PageTitle className={scss.title}>Поиск</PageTitle>
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
