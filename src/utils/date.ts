const months = [
  "января",
  "феврваля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

export const formatDateFromString = (str: string) => {
  const d = new Date(str);
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
};
