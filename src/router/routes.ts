export enum AppRoutes {
  HOME = "/",
  SEARCH = "/search",
  CREATE = "/create",
  INITIATIVES = "/initiative",
  SINGLE = ":initiativeId",
  PERSONAL = "personal",
  AREA = "area",
  ACCOUNT = "/account",
  SETTINGS = "settings",
  NOTIFICTION = "notifications",
  INFO = "/info",
  DOC = ":docId",
}

export const goToPage = {
  home: AppRoutes.HOME,
  search: AppRoutes.SEARCH,
  create: AppRoutes.CREATE,
  initiative: (initiativeId: string) =>
    `${AppRoutes.INITIATIVES}/${initiativeId}`,
  personalInitiatives: `${AppRoutes.INITIATIVES}/${AppRoutes.PERSONAL}`,
  areaInitiatives: `${AppRoutes.INITIATIVES}/${AppRoutes.AREA}`,
  account: AppRoutes.ACCOUNT,
  settings: `${AppRoutes.ACCOUNT}/${AppRoutes.SETTINGS}`,
  notification: `${AppRoutes.ACCOUNT}/${AppRoutes.NOTIFICTION}`,
  info: AppRoutes.INFO,
  doc: (docId: string) => `${AppRoutes.INFO}/${docId}`,
};
