import { useState } from "react";
import TextField from "../../../components/UI/inputs/TextField";
import { useForm } from "../../../hooks/useForm";
import { validationScheme } from "./accountFormValidate";
import styles from "./accountForm.module.scss";

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
      setDisabled(true);
    },
    validationScheme,
  });

  const handleEdit = () => {
    setTimeout(() => {
      handleValidate();
      setDisabled(false);
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Здравствуйте, {user.name}!</h2>

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
      {disabled ? (
        <button type="button" onClick={handleEdit}>
          Редактировать
        </button>
      ) : (
        <button type="submit" disabled={!isValid}>
          Сохранить
        </button>
      )}
    </form>
  );
};

export default AccountForm;
