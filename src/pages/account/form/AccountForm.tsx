import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { validationScheme } from "./accountFormValidate";
import styles from "./accountForm.module.scss";
import AppLoader from "../../../components/AppLoader/AppLoader";
import AppButton, {
  AppButtonType,
} from "../../../components/UI/buttons/AppButton/AppButton";
import TextField from "../../../components/UI/inputs/TextField/TextField";

// TODO: add app store
const user: UserData = {
  name: "Василий",
  lastName: "Иванов",
  phone: "8-999-777-66-55",
  email: "some@mail.com",
  area: "Санкт-Петербург, Невский",
};

type UserData = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  area: string;
};

const items: { name: keyof UserData; label: string; placeholder?: string }[] = [
  { name: "name", label: "Имя", placeholder: "Введите имя" },
  { name: "lastName", label: "Фамилия", placeholder: "Введите фамилию" },
  { name: "phone", label: "Телефон", placeholder: "8-XXX-XXX-XX-XX" },
  { name: "email", label: "Почта", placeholder: "Введите почту" },
  { name: "area", label: "Район" },
];

const AccountForm = () => {
  const [disabled, setDisabled] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const {
    values,
    handleChange,
    handleSubmit,
    handleValidate,
    errors,
    isValid,
  } = useForm<UserData>({
    defaltValues: user,
    onSubmit: (values) => {
      console.log("comp", values);

      setLoaded(true);
      setTimeout(() => {
        // TODO: change user data
        setDisabled(true);
        setLoaded(false);
      }, 500);
    },
    validationScheme,
  });

  const handleEdit = () => {
    setTimeout(() => {
      handleValidate();
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
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Здравствуйте, {user.name}!</h2>

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

      <AppButton className={styles.button} {...buttonProps} />

      {loaded && <AppLoader fixed={true} />}
    </form>
  );
};

export default AccountForm;
