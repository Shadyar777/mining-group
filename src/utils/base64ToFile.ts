async function base64ToFile(dataURI: string, fileName: string): Promise<File> {
  const byteString = atob(dataURI.split(',')[1]);
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const intArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: 'image/jpeg' }); // Вы можете изменить тип файла, если у вас другой формат
  return new File([blob], fileName);
}

export { base64ToFile };
