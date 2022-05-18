import { Initiative } from "../../types/initiative";
import { initiatives } from "./data";

export const initiativesAPI: {
  getIntiatives: (filter: {
    categories?: string[];
    userId?: string;
    area?: string;
  }) => Initiative[];
  getIntiative: (id: string) => Initiative | undefined;
} = {
  getIntiatives: ({ categories }) =>
    initiatives.filter(
      (item) =>
        (categories && categories.includes(item.category)) || !categories
    ),
  getIntiative: (id) => initiatives.find((i) => i.id === id),
};
