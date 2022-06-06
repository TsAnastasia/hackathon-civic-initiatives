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
  searchInitiatives: (filter: {
    categories?: string[];
    has_closed?: boolean;
    text: string;
  }) => InitiativeCardData[];
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
  searchInitiatives: ({ categories, has_closed = false, text }) => {
    const search = text.toLocaleLowerCase().split(" ");
    return initiatives.filter(
      (item) =>
        ((categories && categories.includes(item.category)) || !categories) &&
        ((!has_closed && item.status !== "closed") || has_closed) &&
        search.some(
          (word) =>
            item.title.toLocaleLowerCase().includes(word) ||
            item.description.toLocaleLowerCase().includes(word)
        )
    );
  },
};
