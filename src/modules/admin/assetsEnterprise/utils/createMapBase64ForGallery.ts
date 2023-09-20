const getTypeFile = (url: string) => {
  return (url as any).match(
    /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/,
  )[1] as string;
};

export const createMapBase64ForGallery = (base64Url: string[]) => {
  return base64Url.map((item) => {
    return {
      data: item,
      type: getTypeFile(item),
    };
  });
};
