export const renameDataAttributes = (obj: any) => {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [`data-${key}`, value]));
};
