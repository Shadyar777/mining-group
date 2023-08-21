export const getSelectedResources = (data: Record<string, boolean>) => {
  return Object.entries(data)
    .filter(([, value]) => value)
    .map(([key]) => key);
};
