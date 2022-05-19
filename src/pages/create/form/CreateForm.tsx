import cl from "classnames";
import { FC, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import AppButton from "../../../components/UI/buttons/AppButton/AppButton";
import IconButton from "../../../components/UI/buttons/IconButton/IconButton";
import Select from "../../../components/UI/inputs/Select/Select";
import TextField from "../../../components/UI/inputs/TextField/TextField";
import TextFieldMultiline from "../../../components/UI/inputs/TextFieldMultiline/TextFieldMultiline";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useForm } from "../../../hooks/useForm";
import { setCreateData } from "../../../redux/initiativesSlice/initiativesSlice";
import { goToPage } from "../../../router/routes";
import { Category } from "../../../types/categories";
import { initiativeTypeValues } from "../../../types/initiative";
import scss from "./createForm.module.scss";

const CreateForm: FC<{
  category: Category;
  onSucess: () => void;
  onError: () => void;
  setLoaded: (v: boolean) => void;
}> = ({ category, setLoaded, onError }) => {
  const navigate = useNavigate();

  const { create_data } = useAppSelector((state) => state.initiatives);
  const dispatch = useAppDispatch();

  const {
    values,
    handleChange,
    handleSubmit,
    // handleValidate,
    errors,
    // isValid,
  } = useForm({
    defaultValues: create_data,
    // TODO: validate
    onSubmit: (values) => {
      setLoaded(true);
      setTimeout(() => {
        // API: create intiative
        dispatch(setCreateData(values));
        onError();
        setLoaded(false);
      }, 500);
    },
    // validationScheme,
  });

  const handleBackClick = () => {
    // navigate(-1);
    navigate(goToPage.create);
  };

  const initiativeTypes = useMemo(
    () =>
      Object.entries(initiativeTypeValues).map((item) => ({
        value: item[0],
        name: item[1],
      })),
    []
  );

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
          options={initiativeTypes}
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
        <div className={scss.add}>
          {/* TODO: add files */}
          <IconButton className={cl(scss.button, scss.image)} />
          <IconButton className={cl(scss.button, scss.file)} />
        </div>
        <p className={scss.message}>
          Для продолжения заполните все поля и добавьте фото
        </p>
        <div className={scss.footer}>
          <AppButton className={scss.back} onClick={handleBackClick}>
            Назад
          </AppButton>
          <AppButton type="submit" isBlue>
            Создать
          </AppButton>
        </div>
      </form>
    </section>
  );
};

export default CreateForm;
