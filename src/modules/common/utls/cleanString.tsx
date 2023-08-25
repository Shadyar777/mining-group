// Удалить все символы кроме букв
export const cleanString = (value: string): string => {
  return value.replace(/[^a-zA-Z]/g, '');
};
