import { useState } from "react";
import TextField from "../../../components/UI/inputs/TextField";
import { useForm } from "../../../hooks/useForm";
import { validationScheme } from "./accountFormValidate";

// TODO: add app store
const user = {
  name: "Василий",
  lastName: "Иванов",
  phone: "8-999-777-66-55",
  email: "some@mail.com",
  area: "Санкт-Петербург, Невский",
};

const AccountForm = () => {
  const [disabled, setDisabled] = useState(true);
  const {
    values,
    handleChange,
    handleSubmit,
    handleValidate,
    errors,
    isValid,
  } = useForm({
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
    <form onSubmit={handleSubmit}>
      <h2>Здравствуйте, {user.name}!</h2>
      <TextField
        name="name"
        value={values.name}
        onChange={handleChange}
        label="Имя"
        placeholder="Введите имя"
        disabled={disabled}
        error={errors.name}
      />
      <TextField
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        label="Фамилия"
        placeholder="Введите фамилию"
        disabled={disabled}
        error={errors.lastName}
      />
      <TextField
        name="phone"
        value={values.phone}
        onChange={handleChange}
        label="Телефон"
        placeholder="8-XXX-XXX-XX-XX"
        disabled={disabled}
        error={errors.phone}
      />
      <TextField
        name="email"
        value={values.email}
        onChange={handleChange}
        label="Почта"
        placeholder="Введите почту"
        disabled={disabled}
        error={errors.email}
      />
      <TextField
        name="area"
        value={values.area}
        onChange={handleChange}
        label="Район"
        disabled={disabled}
      />
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
