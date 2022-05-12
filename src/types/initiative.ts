import { User } from "./users";

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

type Regions = "spb" | "moscow";

export interface Initiative {
  id: string;
  title: string;
  date: string;
  author: User;
  category: string;
  type: InitiativeType;
  status: InitiativeStatus;
  area: { region?: Regions; adress: string };
  images: string[];
  description: string;
  like: { count: number; active: boolean };
  files: { name: string; size: string }[];
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: User;
  text: string;
  date: string;
}

export interface InitiativeCard {
  id: string;
  title: string;
  description: string;
  date: string;
  images: string[];
  type: InitiativeType;
}
