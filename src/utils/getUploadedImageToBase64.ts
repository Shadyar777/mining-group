import { base64ToFile } from './base64ToFile.ts';

export const getUploadedImageToBase64 = async (
  uploadedImage: string | ArrayBuffer | null,
) =>
  String(uploadedImage).includes('base64')
    ? await base64ToFile({
        fileName: 'about-page',
        dataURI: uploadedImage as string,
        optionsType: 'image/jpeg',
      })
    : null;
