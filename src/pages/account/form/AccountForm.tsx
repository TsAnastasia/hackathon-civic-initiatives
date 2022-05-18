import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { validationScheme } from "./accountFormValidate";
import scss from "./accountForm.module.scss";
import AppButton, {
  AppButtonType,
} from "../../../components/UI/buttons/AppButton/AppButton";
import TextField from "../../../components/UI/inputs/TextField/TextField";
import Loader from "../../../components/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { UserEditData } from "../../../types/users";
import { setUserData } from "../../../redux/userSlice/userSlice";

const items: {
  name: keyof UserEditData;
  label: string;
  placeholder?: string;
}[] = [
  { name: "name", label: "Имя", placeholder: "Введите имя" },
  { name: "lastName", label: "Фамилия", placeholder: "Введите фамилию" },
  { name: "phone", label: "Телефон", placeholder: "8-XXX-XXX-XX-XX" },
  { name: "email", label: "Почта", placeholder: "Введите почту" },
  { name: "area", label: "Район" },
];

const AccountForm = () => {
  const { data } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const { values, handleChange, handleSubmit, errors, isValid } =
    useForm<UserEditData>({
      defaltValues: data,
      onSubmit: (values) => {
        console.log("comp", values);

        setLoaded(true);
        setTimeout(() => {
          // API: change user data
          dispatch(setUserData({ ...data, ...values }));
          setDisabled(true);
          setLoaded(false);
        }, 500);
      },
      validationScheme,
    });

  const handleEdit = () => {
    setTimeout(() => {
      // handleValidate();
      setDisabled(false);
    });
  };

  const buttonProps: AppButtonType = disabled
    ? { onClick: handleEdit, children: "Редактировать" }
    : {
        isBlue: true,
        type: "submit",
        disabled: !isValid,
        children: "Сохранить",
      };

  return (
    <form onSubmit={handleSubmit} className={scss.form}>
      <h2 className={scss.title}>Здравствуйте, {data.name}!</h2>

      {items.map(({ name, label, placeholder }) => (
        <TextField
          key={name}
          name={name}
          value={values[name]}
          onChange={handleChange}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          error={errors[name]}
        />
      ))}
      {/* TODO: create select fro area */}

      <AppButton className={scss.button} {...buttonProps} />

      {loaded && <Loader type="fixed" />}
    </form>
  );
};

export default AccountForm;
