import { UserNotification } from "../../types/notification";

export const notifications: UserNotification[] = [
  {
    id: "111-011",
    date: "2021-12-14T14:57:17.604Z",
    comment: "Создана инициатива",
    title: "Уборка снега",
    readed: false,
  },
  {
    id: "111-004",
    date: "2021-12-14T14:57:17.604Z",
    comment: "Добавлен комментарий",
    title: "Уборка снега во дворе",
    readed: false,
  },
  {
    id: "111-002",
    date: "2021-12-13T14:57:17.604Z",
    comment: "Ваша инициатива понравилась 2 людям",
    title: "Уборка снега",
    readed: true,
  },
  {
    id: "111-001",
    date: "2021-12-12T14:57:17.604Z",
    comment: "Ваша инициатива взята в работу",
    title: "Уборка снега",
    readed: true,
  },
];

export const notificationsAPI: {
  getNotifications: () => UserNotification[];
} = {
  getNotifications: () => notifications,
};
