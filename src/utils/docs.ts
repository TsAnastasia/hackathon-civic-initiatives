import { Docs } from "../types/doc";

export const serviceDocs: Docs = {
  publication: {
    title: "Правила публикации инициатив",
    source: "/docs/publication.pdf",
  },
  housing_communal_services: {
    title: "Правила ЖКХ",
    source: "/docs/housing_communal_services.pdf",
  },
};

export const legalDocs: Docs = {
  constitution: {
    title: "Конституция Российской Федерации",
    source: "/docs/constitution.pdf",
  },
  civil_code: {
    title: "Гражданский кодекс",
    source: "/docs/civil_cod.pdf",
  },
  administrative_code: {
    title: "Административный кодекс",
    source: "/docs/administrative_code.pdf",
  },
};

export const docs = { ...serviceDocs, ...legalDocs };
