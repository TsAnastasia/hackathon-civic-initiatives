export const isObjEmpty = (obj: object) => {
  return !Object.values(obj).some((v) => !!v);
};
