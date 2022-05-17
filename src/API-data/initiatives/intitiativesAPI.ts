import { Initiative } from "../../types/initiative";
import { users } from "../users/usersAPI";
import Photo001 from "./photo/image-000001.jpg";
import Photo002 from "./photo/image-000002.jpg";
import Photo003 from "./photo/image-000003.jpg";
import Photo004 from "./photo/image-000004.jpg";
import Photo005 from "./photo/image-000005.jpg";

const intiatives: Initiative[] = [
  {
    id: "860aa5fb8e09440aa81b679a06e8295f",
    title: "Не убран снег во дворе",
    date: "2021-12-04T11:40:31.282Z",
    author: users[0],
    category: "yard",
    type: "complain",
    status: "closed",
    area: { region: "spb", adress: "Санкт-Петербург, улица Ленина" },
    images: [Photo001, Photo002, Photo003],
    description:
      "Мороз и солнце; день чудесный!\nЕще ты дремлешь, друг прелестный\nПора, красавица, проснись:\nОткрой сомкнуты негой взоры ",
    like: { count: 102, active: false },
    files: [],
    comments: [
      {
        id: "f9668f2db01a4b679870787f2178ebc9",
        author: users[3],
        text: "Ночь, улица, фонарь, аптека,\nБессмысленный и тусклый свет.\nЖиви еще хоть четверть века —\nВсё будет так. Исхода нет.\nУмрешь — начнешь опять сначала\nИ повторится все, как встарь:",
        date: "2021-12-05T11:40:31.282Z",
      },
      {
        id: "92879daf7e134ae08fb52e7ff3e36267",
        author: users[1],
        text: "Мороз и солнце; день чудесный!\nЕще ты дремлешь, друг прелестный\nПора, красавица, проснись:\nОткрой сомкнуты негой взоры",
        date: "2021-12-07T11:40:31.282Z",
      },
      {
        id: "70e607edb6124babb243ee75967f110b",
        author: users[2],
        text: "Пусть тени на стене\nРисуют фонари ночные.",
        date: "2021-12-10T11:40:31.282Z",
      },
      {
        id: "35e607efc6124babb263ee75967f110b",
        author: users[4],
        text: "О счастье мы всегда лишь вспоминаем.\nА счастье всюду. Может быть, оно —\nВот этот сад осенний за сараем\nИ чистый воздух, льющийся в окно.",
        date: "2022-01-20T11:40:31.282Z",
      },
    ],
  },
  {
    id: "0bfd51c1f84242dab4bdce7b892367c7",
    title: "Убрать снег с дороги",
    date: "2021-12-05T11:40:31.282Z",
    author: users[4],
    category: "road",
    type: "offer",
    status: "closed",
    area: { region: "moscow", adress: "Москва, проспект Бернадского" },
    images: [Photo004, Photo005, Photo001],
    description:
      "Ночь, улица, фонарь, аптека,\nБессмысленный и тусклый свет.\nЖиви еще хоть четверть века —\nВсё будет так. Исхода нет.\nУмрешь — начнешь опять сначала\nИ повторится все, как встарь:",
    like: { count: 123, active: false },
    files: [
      { name: "Uborka.xlsx", size: "182 KB" },
      { name: "Predlogenie.docx", size: "39 KB" },
    ],
    comments: [
      {
        id: "b8bbddcd469a423092da2a8db615b735",
        author: users[1],
        text: "Пусть тени на стене\nРисуют фонари ночные.",
        date: "2021-12-10T11:40:31.282Z",
      },
    ],
  },
  {
    id: "9ae610c3767a4b95aa0707656ebefd9b",
    title: "Уборка снега",
    date: "2021-12-15T11:40:31.282Z",
    author: users[0],
    category: "yard",
    type: "gratitude",
    status: "closed",
    area: { region: "spb", adress: "Санкт-Петербург, улица Гоголя" },
    images: [Photo002, Photo003, Photo001],
    description:
      "Мороз и солнце; день чудесный!\nЕще ты дремлешь, друг прелестный",
    like: { count: 56, active: true },
    files: [{ name: "Predlogenie.docx", size: "39 KB" }],
    comments: [
      {
        id: "b8bbddcd469a432092da2a8db615b735",
        author: users[1],
        text: "Пусть тени на стене\nРисуют фонари ночные.",
        date: "2021-12-10T11:40:31.282Z",
      },
    ],
  },
  {
    id: "b3052d0334384af1b2684646e9130ac1",
    title: "Убрать снег во дворе",
    date: "2021-12-30T11:40:31.282Z",
    author: users[5],
    category: "yard",
    type: "offer",
    status: "working",
    area: { region: "spb", adress: "Санкт-Петербург, улица Яшина" },
    images: [Photo005, Photo002],
    description:
      "Мороз и солнце; день чудесный!\nЕще ты дремлешь, друг прелестный\nПора, красавица, проснись:\nОткрой сомкнуты негой взоры",
    like: { count: 78, active: true },
    files: [],
    comments: [
      {
        id: "7823261721994e2faa5cb3cef74b7cac",
        author: users[3],
        text: "Пусть тени на стене\nРисуют фонари ночные.",
        date: "2022-01-10T11:40:31.282Z",
      },
    ],
  },
  {
    id: "ce873b3d0260418c96bc5b56212eb1ac",
    title: "Сломан светофор",
    date: "2022-01-15T11:40:31.282Z",
    author: users[0],
    category: "road",
    type: "complain",
    status: "working",
    area: { region: "spb", adress: "Санкт-Петербург, улица Гоголя" },
    images: [],
    description: "Пусть тени на стене\nРисуют фонари ночные.",
    like: { count: 12, active: true },
    files: [],
    comments: [],
  },

  // {
  //   id: "",
  //   title: "Не убран снег во дворе",
  //   date: new Date(2020, 0, 14),
  //   author: {
  //     id: "b4825178d28e4ddd871754a3763a783f",
  //     fullName: "Сергеева Анна",
  //   },
  //   status: "closed",
  //   type: "complaint",
  //   category: ["5354b05beb9c4a9a9b430dc7490171b8"],
  //   area: { region: "moscow", adress: "Москва, ул. Ленина" },
  //   photos: [photo003, photo005],
  //   description: {
  //     text: "",
  //     qoute: "Пусть тени на стене\nРисуют фонари ночные.",
  //   },
  //   files: [{ name: "Uborka.xlsx", size: "182 KB" }],
  //   likes: {
  //     count: 176,
  //     active: false,
  //     users: [],
  //   },
  //   comments: [],
  // },
  // {
  //   id: "5ff3e8f1a04e4ab5902fac9f13453d5b",
  //   title: "Уборка снега",
  //   date: new Date(2020, 0, 15),
  //   author: {
  //     id: "cb0a52c129ad4043a0f02113a914d052",
  //     fullName: "Жуков Александр",
  //   },
  //   status: "considered",
  //   type: "complaint",
  //   category: ["5354b05beb9c4a9a9b430dc7490171b8"],
  //   area: { region: "moscow", adress: "Москва, ул. Петина" },
  //   photos: [photo001, photo004, photo005],
  //   description: {
  //     text: "",
  //     qoute:
  //       "Ночь, улица, фонарь, аптека,\nБессмысленный и тусклый свет.\nЖиви еще хоть четверть века —\nВсё будет так. Исхода нет.\nУмрешь — начнешь опять сначала\nИ повторится все, как встарь:",
  //   },
  //   files: [],
  //   likes: {
  //     count: 352,
  //     active: false,
  //     users: [],
  //   },
  //   comments: [
  //     {
  //       id: "0ae9eec74d98499d9de38588bd2fa028",
  //       author: {
  //         id: "58b8058b7073462bb8a55b8538e6ebc0",
  //         avatar: avatar03,
  //         fullName: "Чиновьев Иван",
  //       },
  //       description: {
  //         qoute: "Пусть тени на стене\nРисуют фонари ночные.",
  //       },
  //       date: new Date(2020, 0, 17),
  //     },
  //   ],
  // },
  // {
  //   id: "3805e2465f814f858d2dba10702af743",
  //   title: "Не убран снег во дворе",
  //   date: new Date(2020, 0, 15),
  //   author: {
  //     id: "40722ea594ce4ba38e4a0dedfb2266a5",
  //     fullName: "Якушева Ольга",
  //   },
  //   status: "working",
  //   type: "complaint",
  //   category: ["5354b05beb9c4a9a9b430dc7490171b8"],
  //   area: { region: "spb", adress: "Санкт-Петербург, улица Гоголя" },
  //   photos: [photo004],
  //   description: {
  //     text: "",
  //     qoute:
  //       "Ночь, улица, фонарь, аптека,\nБессмысленный и тусклый свет.\nЖиви еще хоть четверть века —\nВсё будет так. Исхода нет.\nУмрешь — начнешь опять сначала\nИ повторится все, как встарь:",
  //   },
  //   files: [],
  //   likes: {
  //     count: 203,
  //     active: true,
  //     users: [],
  //   },
  //   comments: [
  //     {
  //       id: "87492929ad7843989f0a4bd27e5c216e",
  //       author: {
  //         id: "58b8058b7073462bb8a55b8538e6ebc0",
  //         avatar: avatar03,
  //         fullName: "Чиновьев Иван",
  //       },
  //       description: {
  //         qoute:
  //           "Ночь, улица, фонарь, аптека,\nБессмысленный и тусклый свет.\nЖиви еще хоть четверть века —\nВсё будет так. Исхода нет.\nУмрешь — начнешь опять сначала\nИ повторится все, как встарь:",
  //       },
  //       date: new Date(2020, 0, 15),
  //     },
  //     {
  //       id: "0908ef8729c14b0ea8d3a487aa8733cd",
  //       author: {
  //         id: "4fb32c03c43b4ec7baddf1ef3110cd5a",
  //         avatar: avatar01,
  //         fullName: "Укаева Ольга",
  //       },
  //       description: {
  //         qoute:
  //           "Мороз и солнце; день чудесный!\nЕще ты дремлешь, друг прелестный\nПора, красавица, проснись:\nОткрой сомкнуты негой взоры",
  //       },
  //       date: new Date(2020, 0, 16),
  //     },
  //   ],
  // },
  // {
  //   id: "50622ea594ce4ba38e4a0dedfb2266a5",
  //   title: "Уборка снега во дворе",
  //   date: new Date(2020, 0, 16),
  //   author: {
  //     id: "b4825178d28e4ddd871754a3763a783f",
  //     fullName: "Сергеева Анна",
  //   },
  //   status: "considered",
  //   type: "gratitude",
  //   category: ["5354b05beb9c4a9a9b430dc7490171b8"],
  //   area: {
  //     region: "spb",
  //     adress: "Санкт-Петербург, Российский проспект, д27",
  //   },
  //   photos: [photo001, photo004, photo002],
  //   description: {
  //     text: "",
  //     qoute: "Пусть тени на стене\nРисуют фонари ночные.",
  //   },
  //   files: [
  //     { name: "Uborka.xlsx", size: "182 KB" },
  //     { name: "Predlogenie.docx", size: "39 KB" },
  //   ],
  //   likes: {
  //     count: 34,
  //     active: false,
  //     users: [],
  //   },
  //   comments: [],
  // },
  // {
  //   id: "6fc24939b8ca40928919657e8b038ac3",
  //   title: "Убрать снег во дворе",
  //   date: new Date(2020, 0, 18),
  //   author: {
  //     id: "f4625178d28e4ddd871754a3763a782f",
  //     fullName: "Ногин Алексей",
  //   },
  //   status: "considered",
  //   type: "offer",
  //   category: ["5354b05beb9c4a9a9b430dc7490171b8"],
  //   area: { region: "moscow", adress: "Москва, ул. Большая Якиманка" },
  //   photos: [photo003, photo005],
  //   description: {
  //     text: "",
  //     qoute:
  //       "Ночь, улица, фонарь, аптека,\nБессмысленный и тусклый свет.\nЖиви еще хоть четверть века —\nВсё будет так. Исхода нет.\nУмрешь — начнешь опять сначала\nИ повторится все, как встарь:",
  //   },
  //   files: [],
  //   likes: {
  //     count: 103,
  //     active: true,
  //     users: [],
  //   },
  //   comments: [],
  // },
  // {
  //   id: "8eec7248090e428ea61088e436b90fdd",
  //   title: "Не убран снег",
  //   date: new Date(2020, 0, 18),
  //   author: {
  //     id: "f4625178d28e4ddd871754a3763a782f",
  //     fullName: "Ногин Алексей",
  //   },
  //   status: "considered",
  //   type: "complaint",
  //   category: ["5354b05beb9c4a9a9b430dc7490171b8"],
  //   area: { region: "moscow", adress: "Москва, ул. Большая Якиманка, д35 с4" },
  //   photos: [photo002, photo004],
  //   description: {
  //     text: "",
  //     qoute: "Пусть тени на стене\nРисуют фонари ночные.",
  //   },
  //   files: [],
  //   likes: {
  //     count: 225,
  //     active: false,
  //     users: [],
  //   },
  //   comments: [
  //     {
  //       id: "6163c848e45d4a2097807a915d7ee45e",
  //       author: {
  //         id: "4fb32c03c43b4ec7baddf1ef3110cd5a",
  //         avatar: avatar01,
  //         fullName: "Укаева Ольга",
  //       },
  //       description: {
  //         qoute:
  //           "Мороз и солнце; день чудесный!\nЕще ты дремлешь, друг прелестный\nПора, красавица, проснись:\nОткрой сомкнуты негой взоры",
  //       },
  //       date: new Date(2020, 0, 18),
  //     },
  //   ],
  // },
];

export const intiativesAPI: {
  getIntiatives: (categories?: string[]) => Initiative[];
  getIntiative: (id: string) => Initiative | undefined;
} = {
  getIntiatives: (categories) =>
    categories
      ? intiatives.filter((item) => categories.includes(item.category))
      : intiatives,
  getIntiative: (id) => intiatives.find((i) => i.id === id),
};
