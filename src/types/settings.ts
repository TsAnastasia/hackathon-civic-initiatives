export enum UserSetting {
  show_Closed = "showClosed",
  showOnlyMine = "showOnlyMine",
  searchOnlyOpen = "searchOnlyOpen",
}

export type UserSettings = { [key in UserSetting]: boolean };

export const settingNames: { [key in UserSetting]: string } = {
  showClosed: "Показывать закрытые инициативы на главной странице",
  showOnlyMine: "Показывать только мои инициативы на главной странице",
  searchOnlyOpen: "Искать только открытые инициативы",
};
