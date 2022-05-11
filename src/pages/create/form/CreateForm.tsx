import { FC } from "react";
import AppButton from "../../../components/UI/buttons/AppButton/AppButton";
import IconButton from "../../../components/UI/buttons/IconButton/IconButton";
import Select from "../../../components/UI/inputs/Select/Select";
import TextField from "../../../components/UI/inputs/TextField/TextField";
import TextFieldMultiline from "../../../components/UI/inputs/TextFieldMultiline/TextFieldMultiline";
import { useForm } from "../../../hooks/useForm";
import { Category } from "../../../types/categories";
import scss from "./createForm.module.scss";

const defaltValues = {
  name: "",
  type: "complain",
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
    // TODO: validate
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
        <Select
          name="type"
          value={values.type}
          onChange={handleChange}
          options={[
            { value: "complain", name: "Жалоба" },
            { value: "offer", name: "Предложение" },
            { value: "gratitude", name: "Благодарность" },
          ]}
        />
        <TextFieldMultiline
          name="description"
          value={values.description}
          onChange={handleChange}
          placeholder="Описание"
          error={errors.description}
          rows={6}
        />
        {/* TODO: chose adress */}
        <TextField
          name="adress"
          value={values.adress}
          onChange={handleChange}
          placeholder="Адрес"
          error={errors.adress}
        />
        <div>
          <IconButton />
          <IconButton />
        </div>
        <p>Для продолжения заполните все поля и добавьте фото</p>
        <div>
          <AppButton>Назад</AppButton>
          <AppButton type="submit" isBlue>
            Создать
          </AppButton>
        </div>
      </form>
    </section>
  );
};

export default CreateForm;