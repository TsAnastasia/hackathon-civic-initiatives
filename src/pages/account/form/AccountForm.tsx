import { FormEvent } from "react";

const user = { name: "Василий" };

const AccountForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Здравствуйте, {user.name}!</h2>
      <label>
        <span>Имя</span>
        <input type="string" value={"Name"} disabled />
      </label>
    </form>
  );
};

export default AccountForm;
