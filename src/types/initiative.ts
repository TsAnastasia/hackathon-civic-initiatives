const initiativeStatuses = ["considered", "working", "closed"] as const;
export type InitiativeStatus = typeof initiativeStatuses[number];
export const initiativeStatusValues: {
  [key in InitiativeStatus]: string;
} = { considered: "На рассмотрении", working: "В работе", closed: "Закрыто" };

const initiativeTypes = ["complain", "offer", "gratitude"] as const;
export type InitiativeType = typeof initiativeTypes[number];
export const initiativeTypeValues: {
  [key in InitiativeType]: string;
} = { complain: "Жалоба", offer: "Предложение", gratitude: "Благодарность" };

export interface Initiative {
  categoty: string;
  id: string;
  type: InitiativeType;
  status: InitiativeStatus;
  title: string;
  date: string;
  author: string;
  adress: string;
  area: string;
  images: string[];
  description: string;
  like: { count: number; active: boolean };
  files: { name: string; size: string }[];
  comments: {
    author: { name: string; avatar: string };
    text: string;
    date: string;
  }[];
}

export interface InitiativeCard {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  type: InitiativeType;
}
