export const convertFileToBase64 = async (fileUrl: string): Promise<string> => {
  const response = await fetch(fileUrl);
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result as string);
    };
    reader.onerror = () => {
      reject(new Error('Failed to convert file to base64'));
    };
    reader.readAsDataURL(blob);
  });
};

export const convertAllImagesToBase64 = async (urls: string[]) => {
  if (!urls?.length) {
    return [];
  }
  const promises = urls.map((url) => convertFileToBase64(url));
  return Promise.all(promises);
};
