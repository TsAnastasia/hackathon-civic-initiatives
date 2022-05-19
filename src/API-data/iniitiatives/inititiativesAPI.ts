import { Initiative, InitiativeCardData } from "../../types/initiative";
import { initiatives } from "./data";

export const initiativesAPI: {
  getIntiatives: (filter: {
    categories?: string[];
    userId?: string;
    region?: string;
    has_closed?: boolean;
  }) => InitiativeCardData[];
  getIntiative: (id: string) => Initiative | undefined;
} = {
  getIntiatives: ({ categories, userId, region, has_closed = false }) =>
    initiatives.filter(
      (item) =>
        ((categories && categories.includes(item.category)) || !categories) &&
        ((userId && item.author.id === userId) || !userId) &&
        ((region && item.area.region === region) || !region) &&
        ((!has_closed && item.status !== "closed") || has_closed)
    ),
  getIntiative: (id) => initiatives.find((i) => i.id === id),
};
