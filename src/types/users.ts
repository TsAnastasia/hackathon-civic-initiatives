export interface User {
  id: string;
  fullName: string;
  avatar?: string;
}

export interface UserData {
  id: string;
  name: string;
  lastName: string;
  fullName: string;
  phone: string;
  email: string;
  area: string;
  avatar?: string;
  notifications_count?: number;
}

export type UserEditData = {
  name: string;
  lastName: string;
  phone: string;
  email: string;
  area: string;
};
