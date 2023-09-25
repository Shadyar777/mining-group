export const isAN = (value: any): boolean => {
  return (
    (value instanceof Number || typeof value === 'number') &&
    !isNaN(value as any)
  );
};
