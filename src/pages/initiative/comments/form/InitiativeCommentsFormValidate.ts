export const validationScheme = {
  // TDODO: fix value type problem
  text: (value: string | boolean) => {
    if (!value) return "Обязательное поле";
  },
};
