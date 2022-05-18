import { UserData } from "../../types/users";
import Avatar01 from "./avatars/avatars-000001.jpg";
import Avatar02 from "./avatars/avatars-000002.jpg";
import Avatar03 from "./avatars/avatars-000003.jpg";

export const users: UserData[] = [
  {
    id: "98cfcd377f1c4b17b1dba9cced6f1e1d",
    name: "Василий",
    lastName: "Иванов",
    fullName: "Василий Иванов",
    phone: "8-999-777-66-55",
    email: "some@mail.com",
    area: "Санкт-Петербург, Невский",
  },
  {
    id: "4fb32c03c43b4ec7baddf1ef3110cd5a",
    name: "Ольга",
    lastName: "Укаева",
    fullName: "Ольга Укаева",
    phone: "8-564-715-99-99",
    email: "olysome@mail.com",
    area: "Санкт-Петербург, Невский",
    avatar: Avatar01,
  },
  {
    id: "b8c8e9b7d14745a3a201e2bcc33d771b",
    name: "Сергей",
    lastName: "Иванов",
    fullName: "Сергей Иванов",
    phone: "8-564-999-77-41",
    email: "someone@mail.com",
    area: "Санкт-Петербург, Невский",
    avatar: Avatar02,
  },
  {
    id: "58b8058b7073462bb8a55b8538e6ebc0",
    name: "Иван",
    lastName: "Чиновьев",
    fullName: "Иван Чиновьев",
    phone: "8-999-564-77-41",
    email: "someIvan@mail.com",
    area: "Санкт-Петербург, Невский",
    avatar: Avatar03,
  },
  {
    id: "b4825178d28e4ddd871754a3763a783f",
    name: "Анна",
    lastName: "Сергеева",
    fullName: "Анна Сергеева",
    phone: "8-999-564-77-41",
    email: "some@mail.com",
    area: "Санкт-Петербург, Невский",
  },
  {
    id: "cb0a52c129ad4043a0f02113a914d052",
    name: "Александр",
    lastName: "Жуков",
    fullName: "Александр Жуков",
    phone: "8-999-564-77-41",
    email: "some@mail.com",
    area: "Санкт-Петербург, Невский",
  },
];

export const userAPI: { getMe: () => UserData } = {
  getMe: () => users[0],
};
