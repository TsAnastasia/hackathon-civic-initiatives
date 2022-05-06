import { Category } from "../../types/categories";

import iconYard from "../../assets/images/category/yard.svg";
import iconHome from "../../assets/images/category/home.svg";
import iconRoad from "../../assets/images/category/road.svg";
import iconInfrastructure from "../../assets/images/category/infrastructure.svg";
import iconTransport from "../../assets/images/category/transport.svg";
import iconBulding from "../../assets/images/category/bulding.svg";
import iconMarketing from "../../assets/images/category/marketing.svg";
import iconInstitution from "../../assets/images/category/institution.svg";
import iconHospital from "../../assets/images/category/hospital.svg";
import iconEco from "../../assets/images/category/eco.svg";

const categories: { [key: string]: { name: string; icon: string } } = {
  yard: {
    name: "Двор",
    icon: iconYard,
  },
  home: {
    name: "Дом",
    icon: iconHome,
  },
  road: {
    name: "Дорога",
    icon: iconRoad,
  },
  infrastructure: {
    name: "Инфраструктура",
    icon: iconInfrastructure,
  },
  transport: {
    name: "Транспорт",
    icon: iconTransport,
  },
  bulding: {
    name: "Строительство",
    icon: iconBulding,
  },
  marketing: {
    name: "Торговля и реклама",
    icon: iconMarketing,
  },
  institution: {
    name: "Госучереждения и общественные организации",
    icon: iconInstitution,
  },
  hospital: {
    name: "Поликлиники",
    icon: iconHospital,
  },
  eco: {
    name: "Эко",
    icon: iconEco,
  },
};

export const categoriesAPI: {
  getCategories: () => Category[];
  getCategory: (id: string) => Category | null;
} = {
  getCategories: () =>
    Object.keys(categories).map((id) => ({ id, ...categories[id] })),
  getCategory: (id) => (categories[id] ? { id, ...categories[id] } : null),
};
