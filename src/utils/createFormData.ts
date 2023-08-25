export const createFormData = (data: Record<string, any>): FormData => {
  const formData = new FormData();
  for (const [key, value] of Object.entries(data)) {
    if (value !== null) {
      formData.append(key, value as string | Blob);
    }
  }
  return formData;
};
