import { Initiative, InitiativeCardData } from "../../types/initiative";
import { initiatives } from "./data";

export const initiativesAPI: {
  getIntiatives: (filter: {
    categories?: string[];
    userId?: string;
    region?: string;
  }) => InitiativeCardData[];
  getIntiative: (id: string) => Initiative | undefined;
} = {
  getIntiatives: ({ categories, userId, region }) =>
    initiatives.filter(
      (item) =>
        ((categories && categories.includes(item.category)) || !categories) &&
        ((userId && item.author.id === userId) || !userId) &&
        ((region && item.area.region === region) || !region)
    ),
  getIntiative: (id) => initiatives.find((i) => i.id === id),
};
