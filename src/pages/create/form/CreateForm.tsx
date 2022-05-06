import { FC } from "react";
import Select from "../../../components/UI/inputs/Select/Select";
import TextField from "../../../components/UI/inputs/TextField/TextField";
import { useForm } from "../../../hooks/useForm";
import { Category } from "../../../types/categories";
import scss from "./createForm.module.scss";

const defaltValues = {
  name: "",
  type: "",
  description: "",
  adress: "",
};

const CreateForm: FC<{ category: Category }> = ({ category }) => {
  const {
    values,
    handleChange,
    handleSubmit,
    // handleValidate,
    errors,
    // isValid,
  } = useForm({
    defaltValues,
    onSubmit: (values) => {
      console.log("comp", values);

      // setLoaded(true);
      setTimeout(() => {
        // TODO: change user data
        // setDisabled(true);
        // setLoaded(false);
      }, 500);
    },
    // validationScheme,
  });

  return (
    <section className={scss.root}>
      <h1 className={scss.title}>Создание инициативы</h1>
      <form onSubmit={handleSubmit} className={scss.form}>
        <p className={scss.category}>{`КАТЕГОРИЯ: ${category.name}`}</p>
        <TextField
          name="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Название"
          error={errors.name}
        />
        {/* TODO: create select */}
        <Select
          name="type"
          value={values.type}
          onChange={handleChange}
          // label="test"
          options={[
            { value: "complain", name: "Жалоба" },
            { value: "offer", name: "Предложение" },
            { value: "gratitude", name: "Благодарность" },
          ]}
        />
        {/* <TextField
          name="type"
          value={values.type}
          onChange={handleChange}
          placeholder="Жалоба"
          error={errors.name}
        /> */}

        {/* TODO: create textarea */}
        <TextField
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Описание"
          error={errors.description}
          // multiple
          // rows={6}
        />
        <TextField
          name="adress"
          value={values.adress}
          onChange={handleChange}
          placeholder="Адрес"
          error={errors.adress}
        />
        <button type="submit">submit</button>
      </form>
    </section>
  );
};

export default CreateForm;
