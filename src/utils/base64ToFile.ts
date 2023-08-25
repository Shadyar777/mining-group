type Base64ToFileParams = {
  dataURI: string;
  fileName: string;
  optionsType: 'application/pdf' | 'image/jpeg';
};

async function base64ToFile({
  dataURI,
  fileName,
  optionsType,
}: Base64ToFileParams): Promise<File> {
  if (!dataURI) {
    const endStr = optionsType.split('/')[1];
    return new File([], `empty/${endStr}`);
  }

  const byteString = atob(dataURI.split(',')[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: optionsType });
  return new File([blob], fileName);
}

export { base64ToFile };
