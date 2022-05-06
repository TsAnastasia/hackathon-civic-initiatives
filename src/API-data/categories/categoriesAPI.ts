import { Category } from "../../types/categories";

const categories: Category[] = [{ id: "yard", name: "Двор", icon: "" }];

export const categoriesAPI = {
  getCategories: () => categories,
};
