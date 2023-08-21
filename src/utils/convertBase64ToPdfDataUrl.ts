export const convertBase64ToPdfDataUrl = (base64String: string): string => {
  return `data:application/pdf;base64,${base64String}`;
};
