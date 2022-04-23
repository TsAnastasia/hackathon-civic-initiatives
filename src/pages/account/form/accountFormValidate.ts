const checkName = (value: string | boolean) => {
  // TDODO: fix value type problem
  if (typeof value === "boolean") return;
  if (!value) return "Обязательное поле";
  if (value.length < 2) return "Минимум 2 символа";
  if (value.length > 40) return "Максимум 40 символов";
  if (!/^[а-яё -]+$/i.test(value)) return "Только кириллица, пробелы и дефисы";
};

export const validationScheme = {
  name: checkName,
  lastName: checkName,
  phone: (value: string) => {
    if (!value) return "Обязательное поле";
  },
  email: (value: string) => {
    if (!value) return "Обязательное поле";
  },
};
