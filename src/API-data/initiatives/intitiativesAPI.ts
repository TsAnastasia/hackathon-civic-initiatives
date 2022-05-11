import { Initiative } from "../../types/initiative";

const intiatives: Initiative[] = [];

export const intiativesAPI: {
  getIntiatives: (categories?: string[]) => Initiative[];
  getIntiative: (id: string) => Initiative | undefined;
} = {
  getIntiatives: (categories) =>
    categories
      ? intiatives.filter((item) => categories.includes(item.categoty))
      : intiatives,
  getIntiative: (id) => intiatives.find((i) => i.id === id),
};
