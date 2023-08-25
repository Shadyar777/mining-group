type ParseImgParams = {
  type: string;
  data: string;
};

export const parseImgBase64 = ({ type, data }: ParseImgParams): string => {
  return `data:${type};base64,${data}`;
};
